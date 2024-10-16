import { expect, it} from "vitest"
import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import AppStore from "../../Utlis/Redux/AppStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("Should render the Header Component with a login button",()=>{

    render(
        <BrowserRouter>
        <Provider store = {AppStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument();
})

it("should render Login button to Logout by onclick",()=>{
    render(
        <BrowserRouter>
        <Provider store = {AppStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const LoginButton = screen.getByRole("button",{name:"Login"})
    fireEvent.click(LoginButton);
    const LogoutButton = screen.getByRole("button",{name:"Logout"});
    expect(LogoutButton).toBeInTheDocument();
})