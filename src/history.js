import AOS from 'aos'
import React , { useEffect }  from 'react';
import 'aos/dist/aos.css'


function History() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return ( 
        <div className='historycontainer'>
        <h1>Recent israelian assualts on Palestine</h1>
    <div className="parent">
       
        <a className='pic1a' target="_blank"  data-aos="flip-left"   href='https://en.wikipedia.org/wiki/2012_Israeli_operation_in_the_Gaza_Strip#:~:text=The%20conflict%20resulted%20in%20between,declaring%20a%20one%2Dweek%20ceasefire.'>
        <div className="pic1">
        <img src= {require('./img/2012.jpg')} alt="2012"></img>
        <h3>2012 assault</h3>
        <p>The conflict resulted in between 1,166 and 1,417 Palestinian and 13 Israeli deaths (4 from friendly fire), with significant damage to infrastructure in Gaza. It ended with a unilateral ceasefire by Israel, followed by Hamas declaring a one-week ceasefire.</p>
        </div>
        </a>
        <a className='pic1a' target="_blank" data-aos="flip-right"   href='https://en.wikipedia.org/wiki/2014_Gaza_War#:~:text=According%20to%20the%20OCHA%202015,bombing%20incidents%20on%20residential%20buildings.'>

        <div className='pic1'>
        <img src= {require('./img/2014.jpg')} alt="2014"></img>
        <h3>2014 assault</h3>
        <p>According to the OCHA 2015 overview, of the 2,220 Palestinians killed in the conflict, 742 fatalities came from 142 families, who suffered the loss of 3 or more family members in individual bombing incidents on residential buildings.</p>
         </div>
         </a>

         <a className='pic1a' target="_blank"  data-aos="flip-left"   href='https://www.hrw.org/ar/news/2023/10/18/israel/palestine-videos-hamas-led-attacks-verified'>
        <div className='pic1'>
        <img src= {require('./img/2019.jpg')} alt="2019"></img>
        <h3>2019 assault</h3>
        <p>A group of international humanitarian organizations also documented 33 residential units destroyed in Gaza, 327 people left homeless, and 700 housing units partially damaged.</p>
         </div>
         </a>

         <a className='pic1a' target="_blank"  data-aos="flip-right"   href='https://en.wikipedia.org/wiki/2021_Israel%E2%80%93Palestine_crisis#:~:text=The%20UN%20and%20Human%20Rights,killed%20by%20Israeli%20Defense%20Forces.'>
        <div className='pic1'>
        <img src= {require('./img/2021.jpg')} alt="2021"></img>
        <h3>2021 assault</h3>
        <p>The UN and Human Rights Watch reported that 260 Palestinians had been killed, half of them (129) civilians including 66 children and 40 women. The deaths of some 243 were reportedly killed by Israeli Defense Forces.</p>
         </div>
         </a>

         <a className='pic1a' target="_blank"  data-aos="flip-left"   href='https://www.state.gov/reports/country-reports-on-terrorism-2022/israel-west-bank-and-gaza/#:~:text=2022%20Terrorist%20Incidents%3A%20The%20United,by%20explosive%20weapons%2C%20in%202022.'>
        <div className='pic1'>
        <img src= {require('./img/2022.jpg')} alt="2022"></img>
        <h3>2022 assault</h3>
        <p>2022 Terrorist Incidents: The United Nations Office for the Coordination of Humanitarian Affairs (UN OCHA) reported 154 Palestinians killed in the West Bank, 97 percent by gunfire, and 49 killed in Gaza, all by explosive weapons, in 2022.</p>
         </div>
         </a>

         <a className='pic1a' target="_blank"  data-aos="flip-right"   href='https://www.aljazeera.com/news/liveblog/2024/6/5/israels-war-on-gaza-live-deadly-strikes-ground-attack-target-bureij-camp#:~:text=At%20least%2036%2C586%20people%20have,still%20held%20captive%20in%20Gaza.'>
        <div className='pic1'>
        <img src= {require('./img/2023.jpg')} alt="2023"></img>
        <h3>2023 assault</h3>
        <p>At least 36,586 people have been killed and 83,074 wounded in Israel's war on Gaza since October 7. The death toll in Israel from Hamas's attacks is at least 1,139, with dozens of people still held captive in Gaza.</p>
         </div>
         </a>
    </div> 
    </div>
    
    );
}
 
export default History;