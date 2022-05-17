import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";
/**
 * 加载spinner
 */
const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};
export default Spinner;
