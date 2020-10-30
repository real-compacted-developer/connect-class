import React, { useReducer, useContext, createContext, Dispatch } from "react";

interface IState {}
interface IAction {
  type: string;
  data: any;
}

type SampleDispatch = Dispatch<IAction>;

const StateContext = createContext<IState | null>(null);
const DispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "action.type":
      // 새로운 state를 반환합니다.
      return {
        ...state,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useCustomState(): IState {
  const state = useContext(StateContext);

  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function useCustomDispatch(): React.Dispatch<IAction> {
  const dispatch = useContext(DispatchContext);

  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
