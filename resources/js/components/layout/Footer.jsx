import React from 'react';
import {Container} from "react-bootstrap";

function Footer(props) {
    return (
        //className="fixed-bottom"
        <div className="sticky-bottom">
            <img
                alt=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAApBJREFUeF7tWkuLMjEQbJ8o6sEXiqDixYv//1949eJFVBAFX6CCD9Slw7b0hsSZZef7Dk7lskw2k3RXV1dlh00Mh8MnxXgkAAAYgBaABsRYAwkiCBeAC8AF4AJwgRgjABuEDcIGYYOwwRibAP4Ygg3CBmGDsEHYYJANVioV6na7lEwmzdLz+Uyj0cj5WqvVokajQavVihaLRdDWoX/f7/epVCqZ9c/nk5bLpXf/wWBg1vli1IcGugAn1Gw26Xg80ng8JgHjdDqZZz04wF6vR+l0+m2AobP+XsgJZbNZmk6ntN1uicEoFAqvZ70fF6pWq70t0q8A4MNTqRRNJhM6HA7mXQ4gl8v9mJN5DoxHVAyQAmw2G5MwDykCgyFzMt9utw1Tr9fr3xkgFWXK29W2q8jIc2AcFP/0ASAJXS6XV4BStfV6/SMhPkP2ler72KNjzWQy0bSAIL3f703/yca2BuiK3G63QA3QCTOr+NnVUpptvI7P8WmAZmWn04kWgEQi8eppSVZTTItOWBHkd1grJCHdYrrKIn4adJ4rFouvmOwzIxNBX69xxarVqgmAWcHrhKJhAZC9Nbguerv0Ruh+v99pNpsZ4dVt+s8B0EmWy2UjiK7BtPVph2gBA+DqfdnPJ7iS5G63My7F+9jj8Xg4neLXLsB9rRN5J0xhGCAV5EC4lfL5vDdQ3q9er9N8PjcCyyNInCNjAB9mJ+TSAI1oGAC0jzO4TGGms+/iYidka4Bd+UgBEBA0zf5yE3RZnn3ZcrUTJyWt9l9vgj7f/ZT5wKvwpyTqywMA4IsQvgjhixC+CH260r/LDy4AF4ALwAXgAnCBGCMAG4QNwgZhg7DBGJsA/ksMNggbhA3CBmGDcbbBLy52lR+HwWLXAAAAAElFTkSuQmCC"
                width="64"
                height="64"
                className="d-inline-block align-top"
            />{' '}
            <ul className="d-inline-block align-top list-unstyled">
                <li>BOOKWORM</li>
                <li>Address</li>
                <li>Phone</li>
            </ul>
        </div>
    );
}

export default Footer;
