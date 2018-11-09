import createHistory from "history/createBrowserHistory";

const history = createHistory();

history.listen((location, action) => {
  if (!location.hash) {
    window.scrollTo(0, 0);
  }
});

export default history;
