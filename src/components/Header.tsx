import { Link, useLocation } from "react-router-dom";
import {
  ButtonList,
  // ButtonLogin,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleSpan,
  LinkText,
  // Search,
} from "../styles/components/Header.style";

function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <HeaderTitle>
        Top<HeaderTitleSpan>Movies</HeaderTitleSpan>
      </HeaderTitle>

      <ButtonList>
        <Link to="/">
          <LinkText active={pathname === "/" ? true : undefined}>
            Populares
          </LinkText>
        </Link>
        <Link to="/releases">
          <LinkText active={pathname === "/releases" ? true : undefined}>
            Lançamentos
          </LinkText>
        </Link>
        <Link to="/upcoming">
          <LinkText active={pathname === "/upcoming" ? true : undefined}>
            Em breve
          </LinkText>
        </Link>
        <Link to="/favorites">
          <LinkText active={pathname === "/favorites" ? true : undefined}>
            Favoritos
          </LinkText>
        </Link>
        {/* <ButtonLogin>
          Login
        </ButtonLogin> */}
      </ButtonList>
    </HeaderContainer>
  );
}

export default Header;
