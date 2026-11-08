import Link from "next/link";

// Privacy policy (LGPD – Lei nº 13.709/2018), in Portuguese and English.
// Public page: reachable without login, linked from the login page and from the
// sidebar. Keep it in step with what the app really collects.

export const metadata = {
    title: "Project Timer Tracker | Privacidade / Privacy",
    description: "Política de privacidade do Project Time Tracker (LGPD) / Privacy policy of Project Time Tracker.",
};

const CONTACT = "hvilelaeng@gmail.com";

type Section = { title: string; paragraphs?: string[]; items?: string[] };
type Policy = { id: string; lang: string; label: string; title: string; updated: string; intro: string; sections: Section[] };

const POLICIES: Policy[] = [
    {
        id: "pt",
        lang: "pt-BR",
        label: "Português",
        title: "Política de Privacidade",
        updated: "Última atualização: 8 de novembro de 2026",
        intro: "Esta política explica como o Project Time Tracker (ptt.hvilela.com) trata os seus dados pessoais, de acordo com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).",
        sections: [
            {
                title: "Quem é o responsável",
                paragraphs: [`O aplicativo é mantido por Henrique Vilela (Vilela Labs), controlador dos dados tratados aqui. Para qualquer assunto sobre privacidade ou para exercer os seus direitos, escreva para ${CONTACT}.`],
            },
            {
                title: "Quais dados tratamos",
                items: [
                    "Dados da sua conta Google, recebidos quando você entra: nome, e-mail, foto de perfil e identificador da conta. Nunca temos acesso à sua senha do Google.",
                    "Dados que você cadastra: projetos (nome e descrição) e registros de tempo (data, horários de início e fim, tempo trabalhado, pausas e descrição).",
                    "Dados técnicos: cookies de sessão e registros de acesso do servidor (como endereço IP e navegador), mantidos pelo provedor de hospedagem.",
                ],
            },
            {
                title: "Para que usamos e com qual base legal",
                paragraphs: [
                    "Usamos esses dados apenas para identificar você, manter a sua sessão e guardar e exibir os seus projetos e o histórico de horas. A base legal é a execução do serviço que você solicitou (art. 7º, V, da LGPD). Os registros técnicos servem à segurança e ao funcionamento do aplicativo (legítimo interesse, art. 7º, IX).",
                    "Não usamos os seus dados para publicidade, não os vendemos e não criamos perfis de comportamento.",
                ],
            },
            {
                title: "Cookies",
                paragraphs: [
                    "Usamos somente cookies essenciais, sem os quais o login não funciona: sessão, proteção contra falsificação de requisições (CSRF) e endereço de retorno após o login. Não há cookies de análise, de publicidade ou de terceiros; por isso não é necessário pedir consentimento para cookies.",
                ],
            },
            {
                title: "Com quem compartilhamos",
                paragraphs: [
                    "Somente com prestadores necessários para o aplicativo funcionar, que tratam os dados em nosso nome: Vercel (hospedagem), o provedor do banco de dados em nuvem e o Google (login). Esses serviços podem armazenar dados fora do Brasil, com garantias de proteção previstas no art. 33 da LGPD. Os dados também podem ser compartilhados se a lei ou uma ordem judicial exigir.",
                ],
            },
            {
                title: "Por quanto tempo guardamos",
                paragraphs: ["Enquanto a sua conta existir. Se você pedir a exclusão, apagamos a conta, os projetos e os registros de tempo em até 15 dias, exceto o que a lei obrigar a manter."],
            },
            {
                title: "Seus direitos",
                paragraphs: [
                    `Você pode pedir, a qualquer momento e sem custo: confirmação de que tratamos os seus dados, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre com quem os compartilhamos e a exclusão da conta (art. 18 da LGPD). Basta escrever para ${CONTACT} a partir do e-mail da sua conta. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).`,
                ],
            },
            {
                title: "Segurança",
                paragraphs: ["O acesso é feito por HTTPS e exige login, e cada usuário vê apenas os próprios projetos e registros. Se ocorrer um incidente de segurança que possa trazer risco a você, avisaremos você e a ANPD, como determina a lei."],
            },
            {
                title: "Alterações",
                paragraphs: ["Esta política pode ser atualizada. A data no topo indica sempre a versão em vigor."],
            },
        ],
    },
    {
        id: "en",
        lang: "en",
        label: "English",
        title: "Privacy Policy",
        updated: "Last updated: November 8, 2026",
        intro: "This policy explains how Project Time Tracker (ptt.hvilela.com) handles your personal data, in line with Brazil's General Data Protection Law (LGPD – Law No. 13,709/2018).",
        sections: [
            {
                title: "Who is responsible",
                paragraphs: [`The app is run by Henrique Vilela (Vilela Labs), the controller of the data processed here. For any privacy matter or to exercise your rights, write to ${CONTACT}.`],
            },
            {
                title: "What data we process",
                items: [
                    "Your Google account data, received when you sign in: name, e-mail, profile picture and account identifier. We never have access to your Google password.",
                    "Data you enter: projects (name and description) and time records (date, start and end times, worked time, breaks and description).",
                    "Technical data: session cookies and server access logs (such as IP address and browser), kept by the hosting provider.",
                ],
            },
            {
                title: "Why we use it and on which legal basis",
                paragraphs: [
                    "We use this data only to identify you, keep you signed in and store and show your projects and time history. The legal basis is the performance of the service you asked for (LGPD art. 7, V). Technical logs serve the security and operation of the app (legitimate interest, art. 7, IX).",
                    "We do not use your data for advertising, do not sell it and do not build behavioural profiles.",
                ],
            },
            {
                title: "Cookies",
                paragraphs: [
                    "We only use essential cookies, without which sign-in does not work: session, cross-site request forgery (CSRF) protection and the return address after sign-in. There are no analytics, advertising or third-party cookies, so no cookie consent is needed.",
                ],
            },
            {
                title: "Who we share it with",
                paragraphs: [
                    "Only with providers needed to run the app, which process the data on our behalf: Vercel (hosting), the cloud database provider and Google (sign-in). These services may store data outside Brazil, with the safeguards of LGPD art. 33. Data may also be shared when required by law or court order.",
                ],
            },
            {
                title: "How long we keep it",
                paragraphs: ["For as long as your account exists. If you ask for deletion, we delete the account, projects and time records within 15 days, except what the law requires us to keep."],
            },
            {
                title: "Your rights",
                paragraphs: [
                    `At any time and free of charge you can ask for: confirmation that we process your data, access, correction, anonymization, blocking or deletion of unnecessary data, portability, information about who we share it with, and deletion of your account (LGPD art. 18). Just write to ${CONTACT} from your account's e-mail. You can also file a complaint with Brazil's National Data Protection Authority (ANPD).`,
                ],
            },
            {
                title: "Security",
                paragraphs: ["Access is over HTTPS and requires sign-in, and each user only sees their own projects and records. If a security incident could put you at risk, we will notify you and the ANPD as the law requires."],
            },
            {
                title: "Changes",
                paragraphs: ["This policy may be updated. The date at the top always shows the version in force."],
            },
        ],
    },
];

export default function PrivacyPage() {
    return (
        <div className="flex flex-col m-4">
            <div className="flex flex-row flex-wrap items-center justify-between gap-4">
                <Link href="/" className="text-highlight font-bold hover:text-highlighthover">
                    Project Time Tracker
                </Link>
                <nav className="flex flex-row gap-2 text-sm">
                    {POLICIES.map((p) => (
                        <a key={p.id} href={`#${p.id}`}
                            className="bg-highlight text-primary font-semibold py-1 px-3 rounded-md hover:bg-highlighthover transition">
                            {p.label}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="flex flex-col items-center py-8">
                <div className="flex flex-col w-full md:w-2/3 bg-bgsecondary text-primary p-6 md:p-12 space-y-12">
                    {POLICIES.map((p) => (
                        <article key={p.id} id={p.id} lang={p.lang} className="space-y-6 scroll-mt-6">
                            <div className="space-y-1">
                                <h1 className="text-2xl font-bold">{p.title}</h1>
                                <p className="text-sm text-zinc-400">{p.updated}</p>
                            </div>
                            <p className="leading-relaxed text-zinc-300">{p.intro}</p>
                            {p.sections.map((s) => (
                                <section key={s.title} className="space-y-2">
                                    <h2 className="text-lg font-bold text-highlight">{s.title}</h2>
                                    {s.paragraphs?.map((text) => <p key={text} className="leading-relaxed text-zinc-300">{text}</p>)}
                                    {s.items && (
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300">
                                            {s.items.map((text) => <li key={text} className="leading-relaxed">{text}</li>)}
                                        </ul>
                                    )}
                                </section>
                            ))}
                        </article>
                    ))}
                    <Link href="/"
                        className="self-center bg-highlight text-primary font-semibold py-2 px-4 rounded-md hover:bg-highlighthover transition">
                        Voltar / Back
                    </Link>
                </div>
            </div>
        </div>
    );
}
