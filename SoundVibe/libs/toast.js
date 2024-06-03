import Toast from "react-native-root-toast";

export const toast = (message, position = 1, time = 3000) => {
  // Add a Toast on screen.
  const pos = position === 1 ? Toast.positions.TOP : Toast.positions.BOTTOM;
  let toaster = Toast.show(message, {
    duration: Toast.durations.LONG,
    position: pos,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    },
  });

  // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
  setTimeout(function () {
    Toast.hide(toaster);
  }, time);
};
