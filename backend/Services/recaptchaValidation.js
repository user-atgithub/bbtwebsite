import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

const client = new RecaptchaEnterpriseServiceClient();
const projectID = "bbtwebsite-1726036138316"; // Replace with your project ID
const recaptchaKey = "6LdFKUYqAAAAAFb1BCq-Hok30HR97Nst5asuzlPt"; // Replace with your site key

export async function createAssessment(token, recaptchaAction) {
    const projectPath = client.projectPath(projectID);

    const request = {
        assessment: {
            event: {
                token: token,
                siteKey: recaptchaKey,
            },
        },
        parent: projectPath,
    };

    try {
        const [response] = await client.createAssessment(request);

        if (!response.tokenProperties.valid) {
            console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`);
            return null;
        }

        if (response.tokenProperties.action === recaptchaAction) {
            console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
            response.riskAnalysis.reasons.forEach((reason) => {
                console.log(reason);
            });

            return response.riskAnalysis.score;
        } else {
            console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
            return null;
        }
    } catch (error) {
        console.error('Error creating assessment:', error);
        return null;
    }
}
