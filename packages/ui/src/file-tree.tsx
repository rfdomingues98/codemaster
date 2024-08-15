/* eslint-disable @typescript-eslint/no-non-null-assertion */
"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import useResizeObserver from "use-resize-observer";

import { icons } from "./icons";
import { cn } from "./index";

type Icons = Omit<typeof icons, "Logo">;
type LucideIcon = Icons[keyof Icons];

interface TreeDataItem {
  id: string;
  name: string;
  icon?: LucideIcon;
  children?: TreeDataItem[];
}

type TreeProps = React.HTMLAttributes<HTMLDivElement> & {
  data: TreeDataItem[] | TreeDataItem;
  initialSlelectedItemId?: string;
  onSelectChange?: (item: TreeDataItem | undefined) => void;
  expandAll?: boolean;
  folderIcon?: LucideIcon;
  itemIcon?: LucideIcon;
};

const Tree = React.forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      data,
      initialSlelectedItemId,
      onSelectChange,
      expandAll,
      folderIcon,
      itemIcon,
      className,
      ...props
    },
    ref,
  ) => {
    const [selectedItemId, setSelectedItemId] = React.useState<
      string | undefined
    >(initialSlelectedItemId);

    const handleSelectChange = React.useCallback(
      (item: TreeDataItem | undefined) => {
        setSelectedItemId(item?.id);
        if (onSelectChange) {
          onSelectChange(item);
        }
      },
      [onSelectChange],
    );

    const expandedItemIds = React.useMemo(() => {
      if (!initialSlelectedItemId) {
        return [] as string[];
      }

      const ids: string[] = [];

      function walkTreeItems(
        items: TreeDataItem[] | TreeDataItem,
        targetId: string,
      ) {
        if (items instanceof Array) {
          // eslint-disable-next-line @typescript-eslint/prefer-for-of
          for (let i = 0; i < items.length; i++) {
            ids.push(items[i]!.id);
            if (walkTreeItems(items[i]!, targetId) && !expandAll) {
              return true;
            }
            if (!expandAll) ids.pop();
          }
        } else if (!expandAll && items.id === targetId) {
          return true;
        } else if (items.children) {
          return walkTreeItems(items.children, targetId);
        }
      }

      walkTreeItems(data, initialSlelectedItemId);
      return ids;
    }, [data, expandAll, initialSlelectedItemId]);

    const { ref: refRoot, width, height } = useResizeObserver();

    return (
      <div ref={refRoot} className={cn("overflow-hidden", className)}>
        <div
          className="overflow-y-auto scrollbar scrollbar-w-3"
          style={{ width, height }}
        >
          <div className="relative p-2">
            <TreeItem
              data={data}
              ref={ref}
              selectedItemId={selectedItemId}
              handleSelectChange={handleSelectChange}
              expandedItemIds={expandedItemIds}
              FolderIcon={folderIcon}
              ItemIcon={itemIcon}
              {...props}
            />
          </div>
        </div>
      </div>
    );
  },
);

type TreeItemProps = TreeProps & {
  selectedItemId?: string;
  handleSelectChange: (item: TreeDataItem | undefined) => void;
  expandedItemIds: string[];
  FolderIcon?: LucideIcon;
  ItemIcon?: LucideIcon;
};

const TreeItem = React.forwardRef<HTMLDivElement, TreeItemProps>(
  (
    {
      className,
      data,
      selectedItemId,
      handleSelectChange,
      expandedItemIds,
      FolderIcon,
      ItemIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} role="tree" className={className} {...props}>
        <ul>
          {data instanceof Array ? (
            data.map((item) => (
              <li key={item.id}>
                {item.children ? (
                  <AccordionPrimitive.Root
                    type="multiple"
                    defaultValue={expandedItemIds}
                  >
                    <AccordionPrimitive.Item value={item.id}>
                      <AccordionTrigger
                        className={cn(
                          "px-2 before:absolute before:left-0 before:-z-10 before:h-[1.75rem] before:w-full before:bg-muted/80 before:opacity-0 hover:before:opacity-100",
                          selectedItemId === item.id &&
                            "text-accent-foreground before:border-l-2 before:border-l-accent-foreground/50 before:bg-accent before:opacity-100 dark:before:border-0",
                        )}
                        onClick={() => handleSelectChange(item)}
                      >
                        {item.icon && (
                          <item.icon
                            className="mr-2 h-4 w-4 shrink-0 text-accent-foreground/50"
                            aria-hidden="true"
                          />
                        )}
                        {!item.icon && FolderIcon && (
                          <FolderIcon
                            className="mr-2 h-4 w-4 shrink-0 text-accent-foreground/50"
                            aria-hidden="true"
                          />
                        )}
                        <span className="truncate text-sm">{item.name}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        <TreeItem
                          data={item.children}
                          selectedItemId={selectedItemId}
                          handleSelectChange={handleSelectChange}
                          expandedItemIds={expandedItemIds}
                          FolderIcon={FolderIcon}
                          ItemIcon={ItemIcon}
                        />
                      </AccordionContent>
                    </AccordionPrimitive.Item>
                  </AccordionPrimitive.Root>
                ) : (
                  <Leaf
                    item={item}
                    isSelected={selectedItemId === item.id}
                    onClick={() => handleSelectChange(item)}
                    Icon={ItemIcon}
                  />
                )}
              </li>
            ))
          ) : (
            <li>
              <Leaf
                item={data}
                isSelected={selectedItemId === data.id}
                onClick={() => handleSelectChange(data)}
                Icon={ItemIcon}
              />
            </li>
          )}
        </ul>
      </div>
    );
  },
);

const Leaf = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    item: TreeDataItem;
    isSelected?: boolean;
    Icon?: LucideIcon;
  }
>(({ className, item, isSelected, Icon, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex cursor-pointer items-center px-2 py-2 before:absolute before:left-0 before:right-1 before:-z-10 before:h-[1.75rem] before:w-full before:bg-muted/80 before:opacity-0 hover:before:opacity-100",
        className,
        isSelected &&
          "text-accent-foreground before:border-l-2 before:border-l-accent-foreground/50 before:bg-accent before:opacity-100 dark:before:border-0",
      )}
      {...props}
    >
      {item.icon && (
        <item.icon
          className="mr-2 h-4 w-4 shrink-0 text-accent-foreground/50"
          aria-hidden="true"
        />
      )}
      {!item.icon && Icon && (
        <Icon
          className="mr-2 h-4 w-4 shrink-0 text-accent-foreground/50"
          aria-hidden="true"
        />
      )}
      <span className="flex-grow truncate text-sm">{item.name}</span>
    </div>
  );
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full flex-1 items-center py-2 transition-all last:[&[data-state=open]>svg]:rotate-90",
        className,
      )}
      {...props}
    >
      {children}
      <icons.ChevronRightIcon className="ml-auto h-4 w-4 shrink-0 text-accent-foreground/50 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <div className="pb-1 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Tree, type TreeDataItem };
