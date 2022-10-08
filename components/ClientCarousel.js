import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ClientCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div><img  src="/bop_3frames.jpg"></img></div>
                    <div><img  src="/bop_ather.jpg"></img></div>
                    <div><img src="/bop_beacongov.jpg"></img></div>
                    <div><img  src="/bop_boss.jpg"></img></div>
                    <div><img src="/bop_drivezero.jpg"></img></div>
                    <div><img  src="/bop_growayu.jpg"></img></div>
                    <div><img  src="/bop_precistat.jpg"></img></div>
                    <div><img  src="/bop_radise.jpg"></img></div>
                    <div><img  src="/bop_tcs.jpg"></img></div>
                    <div><img  src="/bop_traform.jpg"></img></div>
                    <div><img  src="/bop_volvo.jpg"></img></div>
                    <div><img  src="/bop_wellsfargo.jpg"></img></div>
                </Carousel>
            </div>
        );
    }
}