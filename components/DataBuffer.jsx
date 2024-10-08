import { Building2, Gauge, Logs, Settings, Warehouse } from "lucide-react";

export const countryCodes = [
  { name: "Afghanistan", phoneCode: "+93" },
  { name: "Albania", phoneCode: "+355" },
  { name: "Algeria", phoneCode: "+213" },
  { name: "Andorra", phoneCode: "+376" },
  { name: "Angola", phoneCode: "+244" },
  { name: "Antigua and Barbuda", phoneCode: "+1-268" },
  { name: "Argentina", phoneCode: "+54" },
  { name: "Armenia", phoneCode: "+374" },
  { name: "Australia", phoneCode: "+61" },
  { name: "Austria", phoneCode: "+43" },
  { name: "Azerbaijan", phoneCode: "+994" },
  { name: "Bahamas", phoneCode: "+1-242" },
  { name: "Bahrain", phoneCode: "+973" },
  { name: "Bangladesh", phoneCode: "+880" },
  { name: "Barbados", phoneCode: "+1-246" },
  { name: "Belarus", phoneCode: "+375" },
  { name: "Belgium", phoneCode: "+32" },
  { name: "Belize", phoneCode: "+501" },
  { name: "Benin", phoneCode: "+229" },
  { name: "Bhutan", phoneCode: "+975" },
  { name: "Bolivia", phoneCode: "+591" },
  { name: "Bosnia and Herzegovina", phoneCode: "+387" },
  { name: "Botswana", phoneCode: "+267" },
  { name: "Brazil", phoneCode: "+55" },
  { name: "Brunei Darussalam", phoneCode: "+673" },
  { name: "Bulgaria", phoneCode: "+359" },
  { name: "Burkina Faso", phoneCode: "+226" },
  { name: "Burundi", phoneCode: "+257" },
  { name: "Cabo Verde", phoneCode: "+238" },
  { name: "Cambodia", phoneCode: "+855" },
  { name: "Cameroon", phoneCode: "+237" },
  { name: "Canada", phoneCode: "+1" },
  { name: "Central African Republic", phoneCode: "+236" },
  { name: "Chad", phoneCode: "+235" },
  { name: "Chile", phoneCode: "+56" },
  { name: "China", phoneCode: "+86" },
  { name: "Colombia", phoneCode: "+57" },
  { name: "Comoros", phoneCode: "+269" },
  { name: "Congo", phoneCode: "+242" },
  { name: "Democratic Republic of the Congo", phoneCode: "+243" },
  { name: "Costa Rica", phoneCode: "+506" },
  { name: "Côte d'Ivoire", phoneCode: "+225" },
  { name: "Croatia", phoneCode: "+385" },
  { name: "Cuba", phoneCode: "+53" },
  { name: "Cyprus", phoneCode: "+357" },
  { name: "Czech Republic", phoneCode: "+420" },
  { name: "Denmark", phoneCode: "+45" },
  { name: "Djibouti", phoneCode: "+253" },
  { name: "Dominica", phoneCode: "+1-767" },
  {
    name: "Dominican Republic",
    phoneCode: "+1-809",
  },
  { name: "Ecuador", phoneCode: "+593" },
  { name: "Egypt", phoneCode: "+20" },
  { name: "El Salvador", phoneCode: "+503" },
  { name: "Equatorial Guinea", phoneCode: "+240" },
  { name: "Eritrea", phoneCode: "+291" },
  { name: "Estonia", phoneCode: "+372" },
  { name: "Eswatini", phoneCode: "+268" },
  { name: "Ethiopia", phoneCode: "+251" },
  { name: "Fiji", phoneCode: "+679" },
  { name: "Finland", phoneCode: "+358" },
  { name: "France", phoneCode: "+33" },
  { name: "Gabon", phoneCode: "+241" },
  { name: "Gambia", phoneCode: "+220" },
  { name: "Georgia", phoneCode: "+995" },
  { name: "Germany", phoneCode: "+49" },
  { name: "Ghana", phoneCode: "+233" },
  { name: "Greece", phoneCode: "+30" },
  { name: "Grenada", phoneCode: "+1-473" },
  { name: "Guatemala", phoneCode: "+502" },
  { name: "Guinea", phoneCode: "+224" },
  { name: "Guinea-Bissau", phoneCode: "+245" },
  { name: "Guyana", phoneCode: "+592" },
  { name: "Haiti", phoneCode: "+509" },
  { name: "Honduras", phoneCode: "+504" },
  { name: "Hungary", phoneCode: "+36" },
  { name: "Iceland", phoneCode: "+354" },
  { name: "India", phoneCode: "+91" },
  { name: "Indonesia", phoneCode: "+62" },
  { name: "Iran", phoneCode: "+98" },
  { name: "Iraq", phoneCode: "+964" },
  { name: "Ireland", phoneCode: "+353" },
  { name: "Israel", phoneCode: "+972" },
  { name: "Italy", phoneCode: "+39" },
  { name: "Jamaica", phoneCode: "+1-876" },
  { name: "Japan", phoneCode: "+81" },
  { name: "Jordan", phoneCode: "+962" },
  { name: "Kazakhstan", phoneCode: "+7" },
  { name: "Kenya", phoneCode: "+254" },
  { name: "Kiribati", phoneCode: "+686" },
  { name: "Korea (North)", phoneCode: "+850" },
  { name: "Korea (South)", phoneCode: "+82" },
  { name: "Kuwait", phoneCode: "+965" },
  { name: "Kyrgyzstan", phoneCode: "+996" },
  { name: "Laos", phoneCode: "+856" },
  { name: "Latvia", phoneCode: "+371" },
  { name: "Lebanon", phoneCode: "+961" },
  { name: "Lesotho", phoneCode: "+266" },
  { name: "Liberia", phoneCode: "+231" },
  { name: "Libya", phoneCode: "+218" },
  { name: "Liechtenstein", phoneCode: "+423" },
  { name: "Lithuania", phoneCode: "+370" },
  { name: "Luxembourg", phoneCode: "+352" },
  { name: "Madagascar", phoneCode: "+261" },
  { name: "Malawi", phoneCode: "+265" },
  { name: "Malaysia", phoneCode: "+60" },
  { name: "Maldives", phoneCode: "+960" },
  { name: "Mali", phoneCode: "+223" },
  { name: "Malta", phoneCode: "+356" },
  { name: "Mauritania", phoneCode: "+222" },
  { name: "Mauritius", phoneCode: "+230" },
  { name: "Mexico", phoneCode: "+52" },
  { name: "Moldova", phoneCode: "+373" },
  { name: "Monaco", phoneCode: "+377" },
  { name: "Mongolia", phoneCode: "+976" },
  { name: "Montenegro", phoneCode: "+382" },
  { name: "Morocco", phoneCode: "+212" },
  { name: "Mozambique", phoneCode: "+258" },
  { name: "Myanmar", phoneCode: "+95" },
  { name: "Namibia", phoneCode: "+264" },
  { name: "Nauru", phoneCode: "+674" },
  { name: "Nepal", phoneCode: "+977" },
  { name: "Netherlands", phoneCode: "+31" },
  { name: "New Zealand", phoneCode: "+64" },
  { name: "Nicaragua", phoneCode: "+505" },
  { name: "Niger", phoneCode: "+227" },
  { name: "Nigeria", phoneCode: "+234" },
  { name: "North Macedonia", phoneCode: "+389" },
  { name: "Norway", phoneCode: "+47" },
  { name: "Oman", phoneCode: "+968" },
  { name: "Pakistan", phoneCode: "+92" },
  { name: "Palau", phoneCode: "+680" },
  { name: "Panama", phoneCode: "+507" },
  { name: "Papua New Guinea", phoneCode: "+675" },
  { name: "Paraguay", phoneCode: "+595" },
  { name: "Peru", phoneCode: "+51" },
  { name: "Philippines", phoneCode: "+63" },
  { name: "Poland", phoneCode: "+48" },
  { name: "Portugal", phoneCode: "+351" },
  { name: "Qatar", phoneCode: "+974" },
  { name: "Romania", phoneCode: "+40" },
  { name: "Russia", phoneCode: "+7" },
  { name: "Rwanda", phoneCode: "+250" },
  { name: "Saint Kitts and Nevis", phoneCode: "+1-869" },
  { name: "Saint Lucia", phoneCode: "+1-758" },
  { name: "Saint Vincent and the Grenadines", phoneCode: "+1-784" },
  { name: "Samoa", phoneCode: "+685" },
  { name: "San Marino", phoneCode: "+378" },
  { name: "Sao Tome and Principe", phoneCode: "+239" },
  { name: "Saudi Arabia", phoneCode: "+966" },
  { name: "Senegal", phoneCode: "+221" },
  { name: "Serbia", phoneCode: "+381" },
  { name: "Seychelles", phoneCode: "+248" },
  { name: "Sierra Leone", phoneCode: "+232" },
  { name: "Singapore", phoneCode: "+65" },
  { name: "Slovakia", phoneCode: "+421" },
  { name: "Slovenia", phoneCode: "+386" },
  { name: "Solomon Islands", phoneCode: "+677" },
  { name: "Somalia", phoneCode: "+252" },
  { name: "South Africa", phoneCode: "+27" },
  { name: "South Sudan", phoneCode: "+211" },
  { name: "Spain", phoneCode: "+34" },
  { name: "Sri Lanka", phoneCode: "+94" },
  { name: "Sudan", phoneCode: "+249" },
  { name: "Suriname", phoneCode: "+597" },
  { name: "Sweden", phoneCode: "+46" },
  { name: "Switzerland", phoneCode: "+41" },
  { name: "Syria", phoneCode: "+963" },
  { name: "Taiwan", phoneCode: "+886" },
  { name: "Tajikistan", phoneCode: "+992" },
  { name: "Tanzania", phoneCode: "+255" },
  { name: "Thailand", phoneCode: "+66" },
  { name: "Timor-Leste", phoneCode: "+670" },
  { name: "Togo", phoneCode: "+228" },
  { name: "Tonga", phoneCode: "+676" },
  { name: "Trinidad and Tobago", phoneCode: "+1-868" },
  { name: "Tunisia", phoneCode: "+216" },
  { name: "Turkey", phoneCode: "+90" },
  { name: "Turkmenistan", phoneCode: "+993" },
  { name: "Tuvalu", phoneCode: "+688" },
  { name: "Uganda", phoneCode: "+256" },
  { name: "Ukraine", phoneCode: "+380" },
  { name: "United Arab Emirates", phoneCode: "+971" },
  { name: "United Kingdom", phoneCode: "+44" },
  { name: "United States", phoneCode: "+1" },
  { name: "Uruguay", phoneCode: "+598" },
  { name: "Uzbekistan", phoneCode: "+998" },
  { name: "Vanuatu", phoneCode: "+678" },
  { name: "Venezuela", phoneCode: "+58" },
  { name: "Vietnam", phoneCode: "+84" },
  { name: "Yemen", phoneCode: "+967" },
  { name: "Zambia", phoneCode: "+260" },
  { name: "Zimbabwe", phoneCode: "+263" },
];
export const menuItems = [
  {
    link: "/profile",
    text: "Business Profile",
    icon: <Building2 strokeWidth={1} />,
  },
  {
    link: "/dashboard",
    text: "Dashboard",
    icon: <Gauge strokeWidth={1} />,
  },
  {
    link: "/inventory",
    text: "Inventory",
    icon: <Warehouse strokeWidth={1} />,
  },
  {
    link: "/settings",
    text: "Settings",
    icon: <Settings strokeWidth={1} />,
  },
  {
    link: "/",
    text: "Logs",
    icon: <Logs strokeWidth={1} />,
  },
];
export const notifications = [
  {
    message: "This is a notification",
    date: "02-02-2024",
    read: false,
  },
  {
    message: "This is another notification",
    date: "01-01-2024",
    read: true,
  },
];
