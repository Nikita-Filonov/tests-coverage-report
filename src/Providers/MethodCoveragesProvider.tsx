import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { MethodCoverage } from '../Models/Coverage/MethodCoverage';

export type MethodCoveragesContextProps = {
  methodCoverage: MethodCoverage;
  setMethodCoverage: Dispatch<SetStateAction<MethodCoverage>>;
};

const MethodCoveragesContext = React.createContext<MethodCoveragesContextProps | null>(null);

const MethodCoveragesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [methodCoverage, setMethodCoverage] = useState<MethodCoverage>({
    method: '',
    covered: false,
    totalCases: 0,
    deprecated: false,
    requestCoverage: {
      name: '',
      totalCoverage: 0,
      totalParameters: 0,
      parametersCoverage: [],
      totalCoveredParameters: 0
    },
    responseCoverage: {
      name: '',
      totalCoverage: 0,
      totalParameters: 0,
      parametersCoverage: [],
      totalCoveredParameters: 0
    }
  });

  return (
    <MethodCoveragesContext.Provider value={{ methodCoverage, setMethodCoverage }}>
      {children}
    </MethodCoveragesContext.Provider>
  );
};

const useMethodCoverages = () => {
  const event = useContext(MethodCoveragesContext);
  if (event == null) {
    throw new Error('useMethodCoverages() called outside of a MethodCoveragesProvider?');
  }
  return event;
};

export { MethodCoveragesProvider, useMethodCoverages };
