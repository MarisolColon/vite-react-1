
import styled from "styled-components"

const StyledFooter = styled.div`
    width: 100vw;
    background-color: black;
    color: white;
    height: 10em;
    position: fixed;
    bottom: 0;

    & a.nav-link.px-2.text-body-secondary {
        color: white !important;
    }
`
// const StyledFooterp = styled.p`
//     color: red !important;
// `


export default function Footer() {
    return (
    <>
        <StyledFooter>
            <div class="container">
                <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
                <p class="text-center">© 2024 Company, Inc</p>
                </footer>
            </div>
        </StyledFooter>
    </>
    )
}