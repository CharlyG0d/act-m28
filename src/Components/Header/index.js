import { HeaderMain, ImgHeader, LinkHeader, NavHeader } from "./styles";
import logo from "../../assets/logo1.png";

const Header = () =>{
    return (

        <HeaderMain >
          <ImgHeader src={logo} alt="Logo" />
          <NavHeader >
           <LinkHeader to="/inicio" >Inicio</LinkHeader>
           {/*<LinkHeader to="/user" >Usuario </LinkHeader>*/}
           <LinkHeader to="/cart" >Carrito </LinkHeader>
          </NavHeader>
        </HeaderMain>
      );
}

export default Header;