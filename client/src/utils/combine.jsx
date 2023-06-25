import React from 'react';

export function combineProviders(providers) {
  return providers.reduce(
    (AccumulatedProviders, CurrentProvider) =>
      ({ children }) =>
        (
          <AccumulatedProviders>
            <CurrentProvider>{children}</CurrentProvider>
          </AccumulatedProviders>
        )
  );
}
