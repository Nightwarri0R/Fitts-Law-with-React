
import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import Button1 from './Button';
import Navigation from './Interface';




const Consent = () => {

  return (
    <div className="consent_page">

      <h1 id="participation_tittle" >Participation Sheet</h1>

      <h2 id="titles">Participant Information Sheet for [Adults aged between 20 to 30]</h2>

      <h2 id="titles">Mobile Size Game</h2>

      <h2 id="titles">University of Dundee School Research Ethics Committee Application/Approval Number: None</h2>

      <p id="paragraph_consent">
        You are invited to take part in a research project. Before you decide whether or not you would like to participate it
        is important that you read the information provided below. This will help you to understand why and how the research is being carried out and what participation will
        involve. Please let the researcher who gave you this information know if anything is unclear or you have any questions.
      </p>

      <h2 id="titles">Who is conducting the research?</h2>

      <p d="paragraph_consent">
        Provide details of the researcher(s) involved in the study
        (including those outwith the University) and contact details for the Principal Researcher. If the research is carried out as part of an undergraduate, Masters or PhD project this should be stated and the name
        and contact details of the academic supervisor also provided.
      </p>

      <h2 id="titles" >Who is funding the research?</h2>

      <p d="paragraph_consent"> Not Aplicable</p>

      <h2 id="titles" >What is the purpose of the research?</h2>

      <p id="paragraph_consent">
        Explain briefly and in plain English why the research is
        being carried out, including the background, aims and objectives of the study.
      </p>

      <h2 id="titles" >Why have I been invited to take part?</h2>

      <p id="paragraph_consent">
        You have been invited to take part because
        [Explain why the potential participant has been approached]
      </p>

      <h2 id="titles" >Why have I been invited to take part?</h2>

      <p d="paragraph_consent"> No. [Explain that: taking part is voluntary,
      choosing not to take part will not disadvantage the potential participant
      in any way; and that the participant may decide to withdraw from the study at any time
      without explanation and without penalty. In relation to participant withdrawal
      from the study you should explain when this can be requested and the method of doing so.
      After data collection is complete it may not be possible for the
      participant to withdraw from the study if the data is anonymous]</p>

      <h2 id="titles" >What will happen if I take part?</h2>

      <p id="paragraph_consent">
        Provide sufficiently detailed information about what the participant is
        expected to do in order to enable them to give informed consent. This should
        include an indication of the time commitment and the number and type of activities
        they will be asked to undertake (e.g. a questionnaire that takes 30 minutes to
        complete or three experimental sessions of 1 hour each), the method for gathering
        the data (e.g. written, audio, film) and where the study will be conducted. If tissue samples will be taken briefly
        explain the procedures for taking, storing and disposing of the samples.
      </p>
      <h2 id="titles" >Are there any risks in taking part?</h2>

      <p id="paragraph_consent">
        Either state that there are no known risks for the participant in the study
        or, if risks have been identified, explain what the risks are and how you will try and
        mitigate them (e.g. referring the participant to an appropriate organisation for
        additional support).
      </p>

      <h2 id="titles" >What are the possible benefits of taking part?</h2>

      <p d="paragraph_consent"> rovide information on any anticipated direct benefits
      to the participant. If there are no direct benefits to the participant this should be made clear.
      Potential wider benefits to society can be provided.</p>


      <h2 id="titles" >Will my taking part in this project be kept confidential?</h2>

      <p d="paragraph_consent"> Explain arrangements for ensuring that personal information about
      the participant collected during the study that could identify them will be kept confidential.
      This should include information on who will have access to their personal data (e.g. the
      researcher or research team; use of a transcription service), procedures to be taken to prevent
      the re-identification of participants from the data collected (e.g. anonymisation) and
      circumstances under which the researcher/research team will need to breach this confidentiality
      (e.g. to report potential harm or danger to participants or others, or criminal activity, to the
      relevant authorities, such as information relating to terrorism, money laundering or child abuse).
      If the data will be collected outside the EU, or transferred outside the EU, this should be stated
      along with the safeguards that will be in place to protect the participant’s personal data (e.g. a
      data sharing agreement; for advice on data sharing agreements please contact Information Governance
      by emailing dataprotection@dundee.ac.uk).</p>

      <h2 id="titles" >What will happen to the information I provide?</h2>

      <p d="paragraph_consent"> Explain where data (electronic and hard copies) will be stored and shared;
      for how long the data will be stored (taking account of funder requirements and any additional
       conditions or practices within the field)</p>

      <h2 id="titles" >Data Protection</h2>

      <p d="paragraph_consent">

        The personal data that will be collected and processed in this study are [insert list of personal data
        types: note that personal data is any information relating to an identified or identifiable natural
        person, in other words an individual, living human being] [If collecting/processing special category
        data] The special category (sensitive personal) data that will be collected and processed in this study
        are …[insert the details of any data to be collected that falls within the following category/categories:
        racial or ethnic origin; political opinions; religious or philosophical beliefs; trade union membership;
        genetics, biometrics; health; sex life; or sexual orientation) [The following two paragraphs should not
        be changed unless they are incorrect in respect of your project. Please contact Information Governance by
        emailing dataprotection@dundee.ac.uk if you are unsure.] The University asserts that it lawful for it to
        process your personal data in this project as the processing is necessary for the performance of a task
        carried out in the public interest or in the exercise of official authority vested in the controller.
        [If processing special category data] The University asserts that is lawful for it to process special
        categories of your personal data in this project as the processing is necessary for archiving purposes in
        the public interest, scientific or historical research purposes or statistical purposes in accordance with
        Article 89(1) of the General Data Protection Regulation [see Appendix 1 for guidance on the requirements for
        processing special categories of personal data in your project].The University of Dundee is the data controller
        for the personal and/or special categories of personal data processed in this project [Where projects are
        developed in partnership this section should be amended to reflect the relationships between the partners
        and their roles in respect of the personal data. This will normally be governed by the collaboration/partnership
        agreement and associated data sharing agreement]. The University respects your rights and preferences in relation
        to your data and if you wish to update, access, erase, or limit the use of your information, please let us know by emailing
        [insert contact details]. Please note that some of your rights may be limited where personal data is processed for research,
        but we are happy to discuss that with you. If you wish to complain about the use of your information please contact the
        University’s Data Protection Officer in the first instance (email: dataprotection@dundee.ac.uk). You may also wish to
        contact the Information Commissioner’s Office (https://ico.org.uk/). You can find more information about the
            ways that personal data is used at the University at: https://www.dundee.ac.uk/information-governance/dataprotection/. </p>

      <h2 id="titles" >Is there someone else I can complain to?</h2>

      <p d="paragraph_consent"> If you wish to complain about the way
      the research has been conducted please contact the Convener of the University
      Research Ethics Committee (https://www.dundee.ac.uk/research/ethics/contacts/).</p>

      <h2 id="titles" >Alternative formats</h2>

      <p d="paragraph_consent"> The researcher should offer to provide a copy of the Participant Information Sheet
      and Consent Form  in alternative formats (e.g. large print, Braille). Advice on alternative formats can
        be obtained from Disability Services (email: altformats@dundee.ac.uk).</p>








      <div className="consent_page">

        <h1 id="Participation_tittle"> Consent Form</h1>

        <p d="paragraph_consent"> Not Aplicable</p>

      </div>
      <Button1 some_component={<Navigation />} />
    </div>
  )
}
export default Consent;
