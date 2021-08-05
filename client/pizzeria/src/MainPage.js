import React from 'react'
import './styles/MainPage.css'
export default function MainPage() {
    return (
        <div className="top">
            <div>
                <h2 className="heading">Our Story</h2>
                <p>We beteve in good We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page Fans were given situations where they had to come up with wacky and tun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers The enthniastic response proved that Puzzena's Fresh Pan Pizza is the Tastiest Pan Pizza Ever since we launched the Tastest Pan Pizza, ever, people have not been able to resist the softest, cheeslest, crunchiest, butterest Domino's Fresh Pan Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
                    <br /><br />
                    We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Evert</p>
            </div>
            <div className="first">
                <img src={process.env.PUBLIC_URL + "./1.JPG"} alt="Miss" />
                <div>
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ingridents</h1>
                    <p>We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut Cut Chop. Chop, Steam Steam. Stir Stir. While they're still young and fresh - that's our motto, It makes the kitchen a better place.</p>
                </div>
            </div>

            <div className="first">
                <div>
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Chefs</h1>
                    <p>They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.</p>
                </div>
                <img src={process.env.PUBLIC_URL + "./2.JPG"} alt="Miss" />
            </div>

            <div className="first">
                <img src={process.env.PUBLIC_URL + "./3.JPG"} alt="Miss" />
                <div>
                    <br /><br /><br /><br /><h1>&nbsp;&nbsp;   45 min delivery</h1>
                </div>
            </div>
        </div>
    )
}
