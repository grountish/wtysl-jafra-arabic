import React, { Component } from 'react'
import slide1 from './../resources/Jafra Slide 1 Arabic.mp4'
import slide2 from './../resources/Jafra Slide 2 Arabic.mp4'
import slide3 from './../resources/Jafra Slide 3 Arabic.mp4'
import slide4 from './../resources/Jafra Slide 4 Arabic.mp4'
import slide5 from './../resources/Jafra Slide 5 Arabic.mp4'
import slide6 from './../resources/Jafra Slide 6 Arabic.mp4'
import slide7 from './../resources/Jafra Slide 7 Arabic.mp4'
import slide8 from './../resources/Jafra Slide 8 Arabic.mp4'
import slide9 from './../resources/Jafra Slide 9 Arabic.mp4'
import slide10 from './../resources/Jafra Slide 10 Arabic.mp4'
import slide11 from './../resources/Jafra Slide 11 Arabic.mp4'
import slide12 from './../resources/Jafra Slide 12 Arabic.mp4'
import slide13 from './../resources/Jafra Slide 13 Arabic.mp4'
import slide14 from './../resources/Jafra Slide 14 Arabic.mp4'
import slide15 from './../resources/Jafra Slide 15 Arabic.mp4'
import slide16 from './../resources/Jafra Slide 16 Arabic.mp4'
import slide17 from './../resources/Jafra Slide 17 Arabic.mp4'
 import slide18 from './../resources/Jafra Slide 18 Arabic.mp4'
import arrowLeft from './../resources/left-arrow.png'
import arrowRight from './../resources/right-arrow.png'
import IphoneChecker from './IphoneChecker';

export class Slider extends Component {

    state = {
        video: 1,
        firstTime: true,
        reized: false
    };

    
    previus = () => {
        this.setState({
            video: this.state.video - 1
        })
    };
    next = () => {
        this.setState({
            video: this.state.video + 1
        })
    };

    play = () => {
        this.videoElement.play();
       
    }

    startXP=()=>{
        this.setState({
            video: this.state.video + 1,
            firstTime: false
        })
    }
    selectSlide=(slide)=>{
        this.setState({
            video: slide
        });

    };

    pause=()=>{
        this.videoElement.paused ? this.videoElement.play() : this.videoElement.pause();
    }

    render() {

        const xp = () => {
            switch (this.state.video) {

                case 1: return <div> {
                    this.state.firstTime ?
                        <div onClick={this.startXP} id="firstOverlay" className={(/CriOS/i.test(navigator.userAgent) &&
                /iphone|ipod|ipad/i.test(navigator.userAgent)) ? "firstOverlay-ip" : 'firstOverlay'}>
                            <h1>Welcome to the Jafra experience</h1>
                            <h4>Navigate through the story by clicking on the arrows </h4>
                        </div>
                        : null
                }  <div  className="dadDiv"><video onClick={this.pause} ref={el => this.videoElement = el} src={slide1} autoPlay muted loop playsInline></video></div></div>;

                case 2: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide2} autoPlay loop playsInline> </video></div>;
                case 3: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide3} autoPlay loop playsInline> </video></div>;
                case 4: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide4} autoPlay loop playsInline> </video></div>;
                case 5: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide5} autoPlay loop playsInline> </video></div>;
                case 6: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide6} autoPlay loop playsInline> </video></div>;
                case 7: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide7} autoPlay loop playsInline> </video></div>;
                case 8: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide8} autoPlay loop playsInline> </video></div>;
                case 9: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide9} autoPlay loop playsInline> </video></div>;
                case 10: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide10} autoPlay loop playsInline> </video></div>;
                case 11: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide11} autoPlay loop playsInline> </video></div>;
                case 12: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide12} autoPlay loop playsInline> </video></div>;
                case 13: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide13} autoPlay loop playsInline> </video></div>;
                case 14: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide14} autoPlay loop playsInline> </video></div>;
                case 15: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide15} autoPlay loop playsInline> </video></div>;
                case 16: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide16} autoPlay loop playsInline> </video></div>;
                case 17: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide17} autoPlay loop playsInline> </video></div>;
                 case 18: return <div className="dadDiv"> <video onClick={this.pause} ref={el => this.videoElement = el} src={slide18} autoPlay loop playsInline> </video></div>;


                default: return <h1>No videoo match</h1>
            }
        }
        return (
            <div className="experience">
             <IphoneChecker />
             
            <div className={/CriOS/i.test(navigator.userAgent) &&
                /iphone|ipod|ipad/i.test(navigator.userAgent) ? "slider-top-container-ip" : "slider-top-container"}>
                <div onClick={()=> this.selectSlide(1)} style={{backgroundColor: this.state.video === 1 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(2)}  style={{backgroundColor: this.state.video === 2 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(3)}  style={{backgroundColor: this.state.video === 3 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(4)}  style={{backgroundColor: this.state.video === 4 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(5)}  style={{backgroundColor: this.state.video === 5 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(6)}  style={{backgroundColor: this.state.video === 6 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(7)}  style={{backgroundColor: this.state.video === 7 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(8)}  style={{backgroundColor: this.state.video === 8 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(9)}  style={{backgroundColor: this.state.video === 9 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}} className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(10)} style={{backgroundColor: this.state.video === 10 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(11)} style={{backgroundColor: this.state.video === 11? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(12)} style={{backgroundColor: this.state.video === 12 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(13)} style={{backgroundColor: this.state.video === 13 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(14)} style={{backgroundColor: this.state.video === 14 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(15)} style={{backgroundColor: this.state.video === 15 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(16)} style={{backgroundColor: this.state.video === 16 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(17)} style={{backgroundColor: this.state.video === 17 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
                <div onClick={()=> this.selectSlide(18)} style={{backgroundColor: this.state.video === 18 ? 'rgba(255, 202, 28, 0.705)': 'rgba(83, 83, 83, 0.6)'}}  className="slider-top-button"></div>
            </div>
                <div className={/CriOS/i.test(navigator.userAgent) &&
                /iphone|ipod|ipad/i.test(navigator.userAgent) ? "direction-buttons-ip" : 'direction-buttons'}>
                    {
                        this.state.video === 1 ?
                            null
                            : <img className="arrows" alt="arrowLeft" src={arrowLeft} onClick={this.previus}></img>
                    }
                 
                    {
                        this.state.video === 18 ?
                            null
                            : <img className="arrows" alt="arrowRight" src={arrowRight} onClick={this.next}></img>
                    }
                    
                </div>
                {xp()}
            </div>
        )
    }
}

export default Slider
