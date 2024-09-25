import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';
import { MethodCoverage } from '../Models/Coverage/MethodCoverage';

export interface MethodCoveragesFilters extends Record<string, boolean> {
  showCovered: boolean;
  showNotCovered: boolean;
  showDeprecated: boolean;
  showNotDeprecated: boolean;
}

const INITIAL_FILTERS: MethodCoveragesFilters = {
  showCovered: true,
  showNotCovered: true,
  showDeprecated: true,
  showNotDeprecated: true
};

type MethodCoveragesFiltersProviderProps = {
  coverages: MethodCoverage[];
} & PropsWithChildren;

export type MethodCoveragesContextProps = {
  filters: MethodCoveragesFilters;
  setFilters: Dispatch<SetStateAction<MethodCoveragesFilters>>;
  filteredCoverages: MethodCoverage[];
  clearAllFilters: () => void;
};

const MethodCoveragesFiltersContext = React.createContext<MethodCoveragesContextProps | null>(null);

const MethodCoveragesFiltersProvider: FC<MethodCoveragesFiltersProviderProps> = ({ children, coverages }) => {
  const [filters, setFilters] = useState<MethodCoveragesFilters>(INITIAL_FILTERS);
  const [filteredCoverages, setFilteredCoverages] = useState<MethodCoverage[]>(coverages);

  useEffect(() => {
    applyFilters();
  }, [filters, coverages]);

  const applyFilters = () => {
    const newCoverages = coverages.filter((coverage) => {
      const matchesCovered = (filters.showCovered && coverage.covered) || (filters.showNotCovered && !coverage.covered);

      const matchesDeprecated =
        (filters.showDeprecated && coverage.deprecated) || (filters.showNotDeprecated && !coverage.deprecated);

      return matchesCovered && matchesDeprecated;
    });

    setFilteredCoverages(newCoverages);
  };

  const clearAllFilters = () => setFilters(INITIAL_FILTERS);

  return (
    <MethodCoveragesFiltersContext.Provider value={{ filters, setFilters, filteredCoverages, clearAllFilters }}>
      {children}
    </MethodCoveragesFiltersContext.Provider>
  );
};

const useMethodCoveragesFilters = () => {
  const event = useContext(MethodCoveragesFiltersContext);
  if (event == null) {
    throw new Error('useMethodCoveragesFilters() called outside of a MethodCoveragesFiltersProvider?');
  }
  return event;
};

export { MethodCoveragesFiltersProvider, useMethodCoveragesFilters };
