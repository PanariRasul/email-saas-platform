import React from "react";

import styles from "../styles/features.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Integrations() {
  return (
    <div>
      <Navbar />
        <div className={`${styles.integrations} bg-blue dark:bg-gray-900`}>
            <p className={`${styles.sectionTitle} text-white dark:text-gray-200`}>
                Integrations
            </p>

            <h2 className={`${styles.headline} text-black dark:text-white`}>
                <span className={`${styles.highlight} text-orange-500 dark:text-orange-400`}>
                Connect Hunter to your favorite apps
                </span>
                <br />
                and grow your outreach faster.
            </h2>

            <div className={`${styles.logoContainer}`}>
                <img
                src="https://hunter.io/assets/integrations-hero-logos-6e4f620a9d2c9b5466f9dd1cd9a42ce96d82e19af655d299520d88eab1240572.svg"
                alt="Integrations Logos"
                />
            </div>
        </div>

      {/*  */}
       <div className={`${styles.navContainer} bg-blue text-gray-800 dark:bg-gray-900 dark:text-white` }>
            <ul className={`${styles.navList}  `}>
                <li className={`${styles.navItem} ${styles.active}`} href="#crm">CRM</li>
                <li className={`${styles.navItem}`}  ><a href="#email">Email service providers</a></li>
                <li className={`${styles.navItem}`}><a href="#Spreadsheets">Spreadsheets</a></li>
                <li className={`${styles.navItem}`}><a href="#Automation">Automation</a></li>
               
            </ul>
       </div>

      {/*  */}
   
    <div className={`${styles.MaincardSection} bg-blue text-gray-800 dark:bg-gray-900 dark:text-white`}>
        <h5 id="crm"><b>CRM Integrations</b></h5>
        <p>Seamlessly transfer verified lead data and engagement insights from Hunter to your preferred CRM platform to enhance sales tracking and follow-ups.</p>
    </div>
    {/*  */}
    <div className={`${styles.cardSection} bg-green dark:bg-gray-900`}>
        
        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-[#F2F9FF] dark:bg-gray-900`}>
                    <img
                    src="https://hunter.io/assets/connected_apps/hubspot_icon-8dc4b32eecb9effca580d8eb26c388852d073a91b5589f23929fb72f903e21c1.png"
                    alt="HubSpot"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>HubSpot</h4> <br/>  
                    <p className="text-white dark:text-gray-200">
                    Send new leads directly to HubSpot and monitor their activity from Hunter Campaigns.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
    
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://hunter.io/assets/connected_apps/salesforce_icon-cceb393e39ed9b098f6fe054faa83a3e19b9563733f64623387e84ffdfcc5ccf.png"
                    alt="Salesforce"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Salesforce</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                   Sync contacts and track leads by integrating Hunter with Salesforce.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_11df00d92568ecc89d4d15e072df8cc6/pipedrive.png"
                    alt="pipedrive "
                    />
                    <p className="text-black dark:text-white"></p>
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Pipedrive</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                    Push qualified leads from Hunter Campaigns into Pipedrive with synced contact activity.
                    </p>
                </div>
            </div>
        </div>
    </div>
   
     
   <div className={`${styles.cardSection} bg-blue dark:bg-gray-900`}>
        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://hunter.io/assets/connected_apps/zoho_icon-e77ee00f3c89013b9c200cd497d481bde10aa2c23953117ec10c81767b28525a.png"
                    alt="zaho"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`} id="email">
                    <h4>Zaho CRM</h4><br/>
                    <p className="text-white dark:text-gray-200">
                    Automatically add leads to Zoho CRM via Zapier.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://hunter.io/assets/connected_apps/close_icon-5beef76248cfbb8ac3738c6abb89e19642e2671c5ff0eccec25d03988ce923a0.png"
                    alt="close"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Close CRM</h4><br/>
                    <p className="text-white dark:text-gray-200">
                     Add new leads to Close CRM using Zapier.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://hunter.io/assets/connected_apps/copper_icon-df4716ff0c8e2b2a6cdb9c7a61ef656459a76b1b99bff297b78c3206f09c78fd.png"
                    alt="copper "
                    />
                    <p className="text-black dark:text-white"></p>
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Copper</h4><br/>
                    <p className="text-white dark:text-gray-200">
                     Sync leads between Hunter and Copper CRM automatically via Zapier.
                    </p>
                </div>
            </div>
        </div>
    </div>
    {/*  */}

     <div className={`${styles.MaincardSection} bg-blue text-gray-800 dark:bg-gray-900 dark:text-white`}>
        <h5 ><b>Email service providers</b></h5>
        <p>Connect your email accounts to Hunter Campaigns to automate and scale your outbound communication with greater efficiency.</p>
    </div>
    <div className={`${styles.cardSection} bg-blue dark:bg-gray-900`}>
        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://hunter.io/assets/connected_apps/gmail_icon-3869ad465bfb5e2b0f953eb46d4963c35eae6544e7c666132e0cc98fa31b9ff7.png"
                    alt="Gamil"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Email</h4>
                    <p className="text-white dark:text-gray-200">
                    Connect Gmail to Hunter Campaigns for direct outreach and activity tracking.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/Outlook-512.png"
                    alt="Outlook"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Outlook</h4>
                    <p className="text-white dark:text-gray-200">
                    Run campaigns through Microsoft Outlook 365 and manage email responses from your existing
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`} id="Spreadsheets" >
                    <img
                    src="https://symbols.getvecta.com/stencil_29/13_windows-server-vm-multi.088f6e7a57.png "
                    alt="SMTP "
                    />
                    <p className="text-black dark:text-white"></p>
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>SMTP/IMAP</h4>
                    <p className="text-white dark:text-gray-200">
                    Integrate any email provider via SMTP/IMAP to send campaigns and receive replies within Hunter.
                    </p>
                </div>
            </div>
        </div>
    </div>
   
    {/*  */}

    <div className={`${styles.MaincardSection} bg-blue text-gray-800 dark:bg-gray-900 dark:text-white`} >
        <h5 ><b>Spreadsheets Intigrations</b></h5>
        <p>Enrich your datasets or source new leads using Hunter, and sync the information directly to your spreadsheet or database of choice.</p>
    </div>

    <div className={`${styles.cardSection} bg-green dark:bg-gray-900`}>
        
        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-[#F2F9FF] dark:bg-gray-900`}>
                    <img
                    src="https://icon-library.com/images/google-sheet-icon/google-sheet-icon-6.jpg"
                    alt="Google Sheets"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Google Sheets</h4> <br/>  
                    <p className="text-white dark:text-gray-200">
                    Find and verify email addresses directly from within Google Sheets using Hunter extensions.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
    
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://hunter.io/assets/connected_apps/airtable_icon-dcd0ed2b8ff0d8dab0312a270160967e5c5710b5b73d7a0c253250d40d905847.png"
                    alt="Airtable"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Airtable</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                    Integrate Hunter with Airtable through Zapier to streamline lead tracking and project workflows.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://icon-library.com/images/excel-sheet-icon/excel-sheet-icon-18.jpg"
                    alt="Microsoft Excel "
                    />
                    <p className="text-black dark:text-white"></p>
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Microsoft Excel</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                    Automate data transfer between Excel and Hunter using Zapier for faster lead handling.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className={`${styles.cardSection} bg-green dark:bg-gray-900`} >
        
        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-[#F2F9FF] dark:bg-gray-900`}>
                    <img
                    src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=contain,w=200,h=200,q=100/sites/www.builtin.com/files/2022-01/smartsheet-logo-mark-collaboration-blue.png"
                    alt="smartsheet"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>SmartSheet</h4> <br/>  
                    <p className="text-white dark:text-gray-200">
                    Connect Hunter with Smartsheet via Zapier to manage leads and campaign data within collaborative project.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
    
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`} >
                    <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-notion-logo-icon-download-in-svg-png-gif-file-formats--productivity-application-brand-apps-pack-logos-icons-8630396.png"
                    alt="Salesforce"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`} id="Automation">
                    <h4>Notion</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                    Use Zapier to sync Hunter leads with Notion databases, enabling centralized lead management and team collaboration.
                    </p>
                </div>
            </div>
        </div>

         
    </div>

    {/*  */}

     <div className={`${styles.MaincardSection} bg-blue text-gray-800 dark:bg-gray-900 dark:text-white`}>
        <h5 >Automation</h5>
        <p>Automate repetitive tasks and streamline workflows by integrating Hunter with powerful automation platforms.</p>
    </div>

<div className={`${styles.cardSection} bg-green dark:bg-gray-900`}>
        
        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-[#F2F9FF] dark:bg-gray-900`}>
                    <img
                    src="https://hunter.io/assets/connected_apps/zapier_icon-750c0eab485f6f72ef70e6a4218b6b4588577d6f220b0766e74b71374b77230b.png"
                    alt="zapier"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Zapier</h4> <br/>  
                    <p className="text-white dark:text-gray-200">
                    Connect Hunter with over 5,000 apps using Zapier to automate lead generation, data entry, and email outreach.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
    
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/make-color.png"
                    alt="Make"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Make</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                    Design advanced, custom workflows with Make to synchronize data and actions across multiple tools using Hunter.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyIOSdtFfVZKhmJpQrHRtHWblQxj4vKWStx21ki3ep0ydJVB_DQxXMtdaAoozx8C-uzA&usqp=CAU"
                    alt="pipedrive "
                    />
                    <p className="text-black dark:text-white"></p>
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Clay</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                    Use Hunter within Clay to power intelligent lead generation and enrichment workflows with minimal manual effort.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className={`${styles.cardSection} bg-green dark:bg-gray-900`}>
        
        <div className={`${styles.card}`}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-[#F2F9FF] dark:bg-gray-900`}>
                    <img
                    src="https://cdn.prod.website-files.com/5c06e16a5bdc7bce10059cc3/636fd07aaa7ce4c86ad79280_ZxJZogb5NSHttw6cGLyKznatitBOLcKEBzma1FGD-Mo.png"
                    alt="Integrately"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Integrately</h4> <br/>  
                    <p className="text-white dark:text-gray-200">
                    Quickly set up one-click automations between Hunter and hundreds of apps using Integrately’s simple, user-friendly interface.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.card}`}>
    
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://ph-files.imgix.net/661bf20f-76e2-4a86-8801-82fde34237a9.png?auto=format"
                    alt="Pabbly Connect"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>Pabbly Connect</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                    Use Pabbly to automate data flow between Hunter and marketing or sales tools with multi-step workflows and real-time triggers.                    
                    </p>
                </div>
            </div>
        </div>

        
        <div className={`${styles.card}`}>
    
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} bg-gray-100 dark:bg-gray-900`}>
                    <img
                    src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png"
                    alt="n8n"
                    />
                </div>
                <div className={`${styles.cardBack} bg-blue dark:bg-gray-900`}>
                    <h4>n8n</h4> <br/>
                    <p className="text-white dark:text-gray-200">
                    Connect Hunter with open-source automation tool n8n for customizable, self-hosted workflows tailored to your team’s infrastructure.
                    </p>
                </div>
            </div>
        </div>

         
    </div>



    <div className="pt-5"><Footer/></div>
    </div>
  );
}

export default Integrations;
