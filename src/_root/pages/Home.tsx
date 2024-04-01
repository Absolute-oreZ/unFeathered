import { useEffect, useState } from 'react';
import { useRandomTip } from '@/lib/react-query/queriesAndMutation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressDemo } from '@/_root/components/ProgressDemo';
import { increaseTipPopularity } from '@/lib/appwrite/api';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { data: randomTip, isLoading, isError } = useRandomTip();
  const navigate = useNavigate();
  const [showUI, setShowUI] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("tipSeen")) {
      setShowUI(false);
    }
  }, []);

  const buttonClickedHandler1 = () => {
    navigate("/knowledge-hub");
  };
  const buttonClickedHandler2 = () => {
    navigate("/self-assessment");
  };

  const handleLike = () => {
    increaseTipPopularity();
    sessionStorage.setItem("tipSeen", "true");
    setShowUI(false); // Hide UI after clicking the button
  };

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <ProgressDemo />
      </div>
    );
  }

  if (isError || !randomTip) {
    return <div>Error fetching random tip!</div>;
  }


  return (
    <>
      {!showUI ? (
        <div className="flex flex-col justify-between bg-gradient-to-b from-sky-blue-light to-sky-blue-dark py-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-screen/3 px-20">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 flex flex-col justify-center items-center overflow-hidden">
              <h2 className="text-xl text-center font-bold mb-4">20+ Certified Financial Consultants</h2>
              <p className="text-sm text-justify text-dark-4">We are proud to have a team of 20+ certified financial consultants who provide expert advice and guidance to our clients, ensuring their financial success.</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 flex flex-col justify-center items-center overflow-hidden">
              <h2 className="text-xl text-center font-bold mb-4">1000+ Satisfied Clients</h2>
              <p className="text-sm text-justify text-dark-4">With over 1000 satisfied clients, we have built a reputation for delivering exceptional service and achieving excellent results.</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 flex flex-col justify-center items-center overflow-hidden">
              <h2 className="text-xl text-center font-bold mb-4">50+ Years of Combined Experience</h2>
              <p className="text-sm text-justify textdark-4">Our team brings together over 50 years of combined experience in the financial industry, ensuring that our clients receive the highest level of expertise and professionalism.</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 flex flex-col justify-center items-center overflow-hidden">
              <h2 className="text-xl text-center font-bold mb-4">Award-Winning Financial Services</h2>
              <p className="text-sm text-justify text-dark-4">We are honored to have received multiple awards for our outstanding financial services, recognizing our commitment to excellence and innovation.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-8 min-h-screen">
            <div className="relative w-full flex flex-col justify-start items-start p-8 text-lg">
              <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/assets/images/ff-bg.jpeg')" }}></div>
              <h1 className="text-5xl font-bold mb-8">Understanding Financial Fraud in the Capital Market</h1>
              <p className="max-w-3xl text-left mb-8">
                Financial fraud occurs when someone takes money or other assets from you through deception or criminal activity. In the capital market, investors and shareholders are often the victims of such scams. Identifying red flags is crucial for detecting potential fraud. Unusual transaction patterns, sudden changes in account activity, and discrepancies in financial records are key indicators. Awareness of these signs is essential for timely intervention.
              </p>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">Red Flags of Financial Fraud</h2>
                <ol className="list-decimal ml-8 mb-8 text-rose-700">
                  <li>Unusual Transaction Patterns</li>
                  <li>Sudden Changes in Account Activity</li>
                  <li>Discrepancies in Financial Records</li>
                </ol>
              </div>
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">Fraud Prevention Measures</h2>
                <ol className="list-decimal ml-8 mb-8 text-yellow-300">
                  <li>Strict Authentication Protocols</li>
                  <li>Employee Training Programs</li>
                  <li>Use of Advanced Security Technologies</li>
                  <li>Vendor and Third-Party Risk Management</li>
                  <li>Regular Security Audits and Assessments</li>
                  <li>Data Encryption and Secure Storage Practices</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center items-center px-6 min-h-screen space-y-6 bg-opacity-50 bg-cover">
            <h1 className="text-5xl font-bold mb-8">Common Types of Fraud</h1>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 border border-gray-300 rounded-lg overflow-hidden">
                  <img src="/assets/images/hacker2.jpg" alt="Investment Scam Infographic" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold mt-2">Investment Scams</h3>
                <p className="text-lg mt-2 text-center">Investment scams involve fraudulent schemes promising high returns with little risk, often targeting unsuspecting investors.</p>
                <p className="text-sm text-gray-600 mt-2">Common examples include Ponzi schemes, pump and dump schemes, and offshore scams.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 border border-gray-300 rounded-lg overflow-hidden">
                  <img src="/assets/images/market_manipulation.jpg" alt="Market Manipulation Infographic" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold mt-2">Market Manipulation</h3>
                <p className="text-lg mt-2 text-center">Market manipulation involves illegal activities aimed at artificially influencing security or commodity prices for personal gain.</p>
                <p className="text-sm text-gray-600 mt-2">This includes practices such as insider trading, spoofing, and front-running.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 border border-gray-300 rounded-lg overflow-hidden">
                  <img src="/assets/images/identity-theft.jpg" alt="Identity Theft Infographic" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold mt-2">Identity Theft</h3>
                <p className="text-lg mt-2 text-center">Identity theft involves the unauthorized use of someone's personal information for fraudulent purposes, such as making purchases or accessing financial accounts.</p>
                <p className="text-sm text-gray-600 mt-2">Methods include phishing, skimming, and data breaches.</p>
              </div>
            </div>
            <Button variant="destructive" className=" text-lg absolute bottom-4 right-4 text-white px-4 py-2 rounded-l h-14 my-4" onClick={buttonClickedHandler1}>
              <img src='/assets/icons/noti.png' className='h-full mx-2' />
              <div className='flex-col my-3'>
                <p>Beware of Scams</p>
                <p>Read More</p>
              </div>
            </Button>
          </div>

          <div className="flex flex-col justify-center items-start px-6 space-y-6 min-h-screen bg-opacity-50 bg-cover" style={{ backgroundImage: "url('/assets/images/scam-bg.jpg')" }}>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Dangers of Scams and Their Impact on Investors</h2>
            <p className="mb-4">
              Scams can have a significant impact on investors, resulting in the loss of money, assets, and personal information. They can cause long-term financial and emotional damage, undermining investor trust and confidence.
            </p>
            <h2 className="text-4xl font-bold text-dark-2 mb-6">WHAT TO DO IF YOU THINK YOU ARE A VICTIM OF AN INVESTMENT SCAM</h2>
            <div className="text-dark-1">
              <p className="mb-4">If you suspect you've fallen victim to an investment scam, it's crucial to take swift action. Here are steps you can follow:</p>
              <ol className="list-decimal list-inside">
                <li className="mb-2">
                  <strong>Document It:</strong> Write down everything you remember about what happened. Include these things:
                  <ul className="list-disc list-inside ml-6">
                    <li>the company name;</li>
                    <li>the names of people who spoke to you;</li>
                    <li>their contact information (telepon numbers, website addresses);</li>
                    <li>the investment information they gave you (regulator registration numbers);</li>
                    <li>a timeline of what happened;</li>
                    <li>a police report (if you filed one and can get a copy);</li>
                    <li>your current credit report from all three credit reporting companies;</li>
                    <li>a list of phone conversations with notes about information they told you; and</li>
                    <li>any other helpful information.</li>
                  </ul>
                </li>
                <li className="mb-2 text-dark-2">
                  <strong>Take Action:</strong> Report the fraud to relevant authorities.
                  <ul className="list-disc list-inside ml-6">
                    <li><span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.location.href = "tel:+60123456789"}>Malaysia Securities Commission</span>.  Make a complaint at +603 6204 8999 or via email at <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.location.href = "mailto:aduan@seccom.com.my"}>aduan@seccom.com.my</span>. Or file a complaint online at <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.open("https://www.sc.com.my/", "_blank")}>sc.com.my</span>.</li>
                    <li><span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.open("https://www.ssm.com.my/", "_blank")}>Companies Commission of Malaysia (SSM)</span>.  File an online complaint at <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.open("https://www.ssm.com.my/", "_blank")}>ssm.com.my</span>.</li>
                    <li><span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.open("https://www.bnm.gov.my/", "_blank")}>Bank Negara Malaysia (BNM)</span>.  File an online complaint at <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.open("https://www.bnm.gov.my/", "_blank")}>bnm.gov.my</span>.</li>
                    <li><span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.open("https://www.mcmc.gov.my/", "_blank")}>Malaysian Communications and Multimedia Commission (MCMC)</span>.  File an online complaint at <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.open("https://www.mcmc.gov.my/", "_blank")}>mcmc.gov.my</span>.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center px-6 h-screen space-y-6 bg-opacity-10 bg-cover">
            <h1 className="text-5xl font-bold mb-8">Join Our Community and Unleash Your Potential</h1>
            <p className="text-lg text-center mb-8">
              Become a part of our vibrant community and unlock a world of opportunities! By joining us, you'll gain access to a supportive network of like-minded individuals who are passionate about financial fraud prevention. Share ideas, collaborate on projects, and learn from experts in the field. Whether you're a seasoned professional or just starting out, our community offers something for everyone.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-center">
                <img src="/assets/icons/innovation.png" alt="Innovation Icon" className="w-24 h-24 mb-4" />
                <h3 className="text-lg font-semibold">Unlock Innovation</h3>
                <p className="text-lg mt-2 text-center">Exchange ideas, collaborate on projects, and stay up-to-date with the latest trends and technologies.</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/icons/network.jpg" alt="Network Icon" className="w-24 h-24 mb-4" />
                <h3 className="text-lg font-semibold">Expand Your Network</h3>
                <p className="text-lg mt-2 text-center">Connect with industry professionals, mentors, and potential collaborators to grow your network.</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/icons/learning.jpg" alt="Learning Icon" className="w-24 h-24 mb-4" />
                <h3 className="text-lg font-semibold">Continuous Learning</h3>
                <p className="text-lg mt-2 text-center">Access exclusive resources, workshops, and educational content to enhance your skills and knowledge.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/icons/question.png" alt="Learning Icon" className="w-24 h-24 mb-4" />
              <h1 className="text-2xl font-semibold text-red">Ever Wonder How Good You Are?</h1>
            </div>
            <Button className="text-lg bottom-4 right-4 text-dark-4 px-4 py-2 rounded-l h-14 bg-pale-yellow" onClick={buttonClickedHandler2}>
              <div className='flex-col my-3'>
                <p>Get Started</p>
              </div>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Card className="bg-pale-purple shadow-lg p-8 rounded-3xl card items-center flex-center flex-col text-center">
            <h1 className="text-4xl font-medium mb-4 text-light-3">Tips Of The Day: {randomTip.category}</h1>
            <p className="text-xl mb-4">"{randomTip.content}"</p>
            {randomTip.author && (
              <p className="text-lg mb-4 author"> - {randomTip.author}</p>
            )}
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full button"
              onClick={handleLike}
            >
              <img src='/assets/icons/tip.png' alt="Like" className="h-6 w-6 mr-2 like-icon" />
              <span className="like-text">Tip</span>
            </Button>
            <p className='text-md text-light-4 mt-3'>This tips has {randomTip.popularity} tips &#128293; </p>
          </Card>
        </div>

      )}
    </>
  );


};

export default Home;
