import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../utils/const';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';


const App = ():JSX.Element => {
  const {isDataLoaded} = useAppSelector((state) => state);
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={AppRoute.quest}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.contacts}>
            <Contacts />
          </Route>
          <Route path={AppRoute.Root}>
            <Home />
          </Route>
          <Route path={AppRoute.NotFound}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
 
};

export default App;
