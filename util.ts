import { useCallback, useState } from "react";

export const formatPhoneNumber = (phoneNumber: string) => {
  // Remove any non-digit characters, including hyphens, spaces, and plus signs
  // Also remove circular brackets, square brackets, and curly brackets
  return phoneNumber.replace(/[-\s+()\[\]{}]/g, "");
};

export const usernameWordSplit = (name: string) => {
  const usernameSplit = name.split(" ");
  if (usernameSplit.length === 1) return name;
  return usernameSplit.length > 2
    ? usernameSplit[0] + " " + usernameSplit[1] + "<br>" + usernameSplit[2]
    : usernameSplit[0] + "<br>" + usernameSplit[1];
};

/**
 * Custom hook that returns a state boolean and a function to toggle that state.
 *
 * @param initialState - The initial state of the boolean (default: false)
 * @returns An array with the current state boolean and a function to toggle the state.
 */
export const useToggle = (
  initialState: boolean = false
): [boolean, () => void, (event: MouseEvent) => void] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback(
    () => setState((prevState: boolean) => !prevState),
    []
  );
  const toggleOff = useCallback((event: MouseEvent) => {
    const target = event.target as Node;
    const node = document.querySelector("[data-toggle-off]");
    if (node && !node.contains(target)) {
      setState(false);
    }
  }, []);
  return [state, toggle, toggleOff];
};
