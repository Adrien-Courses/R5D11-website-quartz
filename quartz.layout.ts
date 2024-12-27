import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode";


const filterFn = (node: FileNode): boolean => {
  // Exclude 'tags' folder
  if (node.name === "tags") {
    return false;
  }

  // Exclude 'index.md' files
  if (node.file && node.name === "index") {
    return false;
  }

  return true;
};

const sortByWeight = (a: FileNode, b: FileNode): number => {
  const getWeight = (node: FileNode): number => {
    if (node.file) {
      // Node is a file; retrieve weight from frontmatter
      return node.file.frontmatter?.weight ?? Infinity;
    } else {
      // Node is a folder; attempt to retrieve weight from index.md frontmatter
      const indexFile = node.children.find(
        (child) => {
          if (child.name == "index") {
            return child

          }
          
        }
      );
      //console.log(indexFile?.file?.frontmatter?.weight)
      return indexFile?.file?.frontmatter?.weight ?? Infinity;
    }
  };

  const weightA = getWeight(a);
  const weightB = getWeight(b);

  // If weights are equal, fall back to alphabetical sorting
  if (weightA === weightB) {
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  }

  return weightA - weightB;
};


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Site : "https://adriencaubel.fr",
      GitHub: "https://github.com/adrien1212/",
      LinkedIn: "https://www.linkedin.com/in/adriencaubel/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "❯", // symbol between crumbs
      rootName: "Agile", // name of first/root element
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: "open", // default state of folders ("collapsed" or "open")
      useSavedState: false, // whether to use local storage to save "state" (which folders are opened) of explorer
      sortFn: sortByWeight,
      filterFn: filterFn,
      order: ["sort", "filter", "map"],
    }
    ))
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({
    spacerSymbol: "❯", // symbol between crumbs
    rootName: "Agile", // name of first/root element
  }
  ), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: "open", // default state of folders ("collapsed" or "open")
      useSavedState: false,
      sortFn: sortByWeight,
      filterFn: filterFn,
      order: ["sort", "filter", "map"],
    }
    )),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
