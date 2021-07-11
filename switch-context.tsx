// https://kentcdodds.com/blog/application-state-management-with-react

import React, {SetStateAction} from 'react';

type SwitchStateTuple = [boolean, React.Dispatch<SetStateAction<boolean>>];
type SwitchState = {
  isOn: boolean;
  setOn: React.Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
};

const SwitchContext = React.createContext<SwitchStateTuple>(null!);

const useSwitchState = (): SwitchState => {
  const context = React.useContext(SwitchContext);

  if (!context) {
    throw new Error(`useSwitchState must be used within a SwitchProvider.`);
  }

  const [isOn, setOn] = context;

  const toggle = () => {
    return setOn((b: boolean) => !b);
  };

  // We can now return this SwitchState object which allows us to access all this.
  return {isOn, setOn, toggle};
};

const SwitchContextProvider = (props: object) => {
  const [isOn, setOn] = React.useState(false);
  const [value, setValue] = React.useMemo(() => [isOn, setOn], [isOn]);

  return <SwitchContext.Provider value={[value, setValue]} {...props} />;
};

export {SwitchContextProvider, useSwitchState};
