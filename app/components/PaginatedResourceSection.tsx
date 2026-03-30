import * as React from 'react';
import {Pagination} from '@shopify/hydrogen';

/**
 * <PaginatedResourceSection> wraps Hydrogen's Pagination component
 * with Astreas-styled previous/next navigation.
 */
export function PaginatedResourceSection<NodesType>({
  connection,
  children,
  resourcesClassName,
}: {
  connection: React.ComponentProps<typeof Pagination<NodesType>>['connection'];
  children: React.FunctionComponent<{node: NodesType; index: number}>;
  resourcesClassName?: string;
}) {
  return (
    <Pagination connection={connection}>
      {({nodes, isLoading, PreviousLink, NextLink}) => {
        const resourcesMarkup = nodes.map((node, index) =>
          children({node, index}),
        );

        return (
          <div>
            <div className="flex justify-center mb-10">
              <PreviousLink>
                {isLoading ? (
                  <span className="text-sm text-muted-foreground">
                    Loading...
                  </span>
                ) : (
                  <span className="btn-dawn text-xs">
                    &uarr; Load previous
                  </span>
                )}
              </PreviousLink>
            </div>
            {resourcesClassName ? (
              <div className={resourcesClassName}>{resourcesMarkup}</div>
            ) : (
              resourcesMarkup
            )}
            <div className="flex justify-center mt-12">
              <NextLink>
                {isLoading ? (
                  <span className="text-sm text-muted-foreground">
                    Loading...
                  </span>
                ) : (
                  <span className="btn-dawn text-xs">
                    Load more &darr;
                  </span>
                )}
              </NextLink>
            </div>
          </div>
        );
      }}
    </Pagination>
  );
}
