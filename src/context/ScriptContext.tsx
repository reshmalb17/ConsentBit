import React, { createContext, useContext } from "react";
import { ScriptType } from "../types/types"; // adjust the path
import { usePersistentState } from "../hooks/usePersistentState";

type ExtendedScriptType = ScriptType & { isSaved?: boolean };

type ScriptContextType = {
  scripts: ExtendedScriptType[];
  setScripts: React.Dispatch<React.SetStateAction<ExtendedScriptType[]>>;
};

const ScriptContext = createContext<ScriptContextType | undefined>(undefined);

export { ScriptContext };

export const ScriptProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scripts, setScripts] = usePersistentState<ExtendedScriptType[]>("scriptContext_scripts", []);

  return (
    <ScriptContext.Provider value={{ scripts, setScripts }}>
      {children}
    </ScriptContext.Provider>
  );
};

export const useScriptContext = () => {
  const context = useContext(ScriptContext);
  if (!context) throw new Error("useScriptContext must be used within a ScriptProvider");
  return context;
};

export default ScriptContext;
