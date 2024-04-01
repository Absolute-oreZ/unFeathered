import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Milonga');

  body {
    font-family: 'Open Sans', sans-serif;
  }
  legend {
    font-family: Milonga;
  }
`;

function SelfAssessment() {
  const [checkedCount, setCheckedCount] = useState(0);
  const totalCount = 25;

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    const checkedCheckboxes = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
    const newCheckedCount = checkedCheckboxes.length;
    setCheckedCount(newCheckedCount);
  };

  const calculatePercentage = () => {
    return ((checkedCount / totalCount) * 100).toFixed(0);
  };

  const gradientColor = () => {
    const percentage = calculatePercentage();
    const red = Math.round(255 - (255 * Number(percentage)) / 100);
    const green = Math.round((255 * Number(percentage)) / 100);
    return `rgb(${red}, ${green}, 0)`;
  };

  const Message = () => {
    const percentage = calculatePercentage();
    let message = "";

    if (Number(percentage) >= 99.5) {
      message = "You've mastered all the essential habits to prevent financial fraud. Keep up the excellent work!";
    } else if (Number(percentage) >= 50) {
      message = "Good effort! You're on the right track with your financial security habits. Keep learning and improving!";
    } else {
      message = "High risk of fraud detected. Take precautions now. Learn fraud prevention, enhance security, stay vigilant.";
    }

    return message;
  };

  return (
    <div id="tips" className="container mx-auto p-8">
      <h3 className="text-2xl font-semibold mb-4">Protect Yourself: Financial Fraud Prevention Checklist</h3>
      <GlobalStyle />
      <div id="percentage" className="my-8">
        <p style={{ color: gradientColor() }} className="font-bold text-3xl mb-4">
          {checkedCount === 0 ? '0%' : `${calculatePercentage()}%`}
        </p>
        <p style={{ color: gradientColor() }} className="text-lg">{Message()}</p>
      </div>
      <form>
        {/* Awareness of Scam Tactics */}
        <fieldset className="shadow-md rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold mb-2">Awareness of Scam Tactics:</legend>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always prevent clicking on links in emails or messages from unknown sources.</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Able to spot phishing emails or fake websites.</label>
          </div>
        </fieldset>

        {/* Personal Information Protection */}
        <fieldset className="shadow-md rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold mb-2">Personal Information Protection:</legend>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Avoid sharing personal, Social Security numbers, or financial information online without being extra careful.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Use strong, complex passwords for your financial accounts.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always avoid making online purchases using public computers or Wi-Fi networks.</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Use different passwords for each of your online accounts.</label>
          </div>
        </fieldset>

        {/* Financial Decision Making */}
        <fieldset className="shadow-md rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold mb-2">Financial Decision Making:</legend>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Consistently take the time to review your financial statements for any unusual activity.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always conduct thorough research before investing money.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always question the legitimacy of any financial opportunity before investing.</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always verify the credentials of individuals or companies offering financial services before getting involved with them.</label>
          </div>
        </fieldset>

        {/* Experience and Precautions */}
        <fieldset className="shadow-md rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold mb-2">Experience and Precautions:</legend>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Never encounter any suspicious activity on your bank accounts or credit cards.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Have antivirus and antimalware software installed on your devices.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always use a VPN or other security measures when accessing financial accounts on public Wi-Fi.</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Tend to be cautious when receiving unsolicited phone calls or emails asking for personal information.</label>
          </div>
        </fieldset>

        {/* Education and Resources */}
        <fieldset className="shadow-md rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold mb-2">Education and Resources:</legend>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Attend a financial literacy workshop or seminar.</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Know where to report instances of financial fraud or suspicious activity if you happen to come across them.</label>
          </div>
        </fieldset>

        {/* Government and Authority Awareness */}
        <fieldset className="shadow-md rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold mb-2">Government and Authority Awareness:</legend>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Know how to verify the legitimacy of a financial institution or advisor with government authorities.</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Check if a financial product or service is registered or licensed with government regulatory bodies.</label>
          </div>
        </fieldset>

        {/* Risk Management */}
        <fieldset className="shadow-md rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold mb-2">Risk Management:</legend>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always take the necessary steps to implement two-factor authentication for your financial accounts.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Regularly update your devices and software to protect against security vulnerabilities.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always monitor your credit report regularly for any unauthorized inquiries or accounts.</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Always review your privacy settings on social media platforms to limit the exposure of personal information.</label>
          </div>
        </fieldset>

        {/* Continuous Improvement */}
        <fieldset className="shadow-md rounded-lg p-4 mb-6">
          <legend className="text-lg font-semibold mb-2">Continuous Improvement:</legend>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Regularly assess and update your financial security measures.</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Eager to learn about new fraud tactics and adapt your prevention strategies accordingly.</label>
          </div>
          <div>
            <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
            <label className="text-base">Proactive in seeking out information and resources to bolster your defenses against financial fraud.</label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SelfAssessment;
