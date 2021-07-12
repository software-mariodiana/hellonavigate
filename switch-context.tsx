// https://kentcdodds.com/blog/application-state-management-with-react

import React, {SetStateAction} from 'react';

type SwitchStateTuple = [boolean, React.Dispatch<SetStateAction<boolean>>];

const SwitchContext = React.createContext<SwitchStateTuple>(null!);

const useSwitchState = (): SwitchStateTuple => {
  const context = React.useContext(SwitchContext);

  if (!context) {
    throw new Error(`useSwitchState must be used within a SwitchProvider.`);
  }

  return context;
};

const SwitchContextProvider = (props: object) => {
  const [isOn, setOn] = React.useState(false);
  const [value, setValue] = React.useMemo(() => [isOn, setOn], [isOn]);

  return <SwitchContext.Provider value={[value, setValue]} {...props} />;
};

export {SwitchContextProvider, useSwitchState};
