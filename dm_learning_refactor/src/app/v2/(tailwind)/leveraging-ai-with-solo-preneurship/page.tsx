import SoloPreneurShipclass from "@/components/ai-for-solo-preneurs/SoloPreneurShipclass";
// import PasswordGate from "@/components/masterclass-layout/PasswordGate";

export const metadata = {
    title: "Leveraging AI with Solo-Preneurship| DMLearning",
    description:
        "Learn from a seasoned industry expert how you can use AI to turn your ideas into successful ventures, even if you are just starting out",
    openGraph: {
        title: "Leveraging AI with Solo-Preneurship| DMLearning",
        description:
            "Learn from a seasoned industry expert how you can use AI to turn your ideas into successful ventures, even if you are just starting out",
    },
};

const SoloPreneurShipclassPage = () => {
    return (
        // <PasswordGate
        //     password={process.env.PAGE_PASSWORD!}
        //     date="17 April"
        //     time="3.30 - 4.30"
        // >
        <SoloPreneurShipclass />
        // </PasswordGate>
    );
};

export default SoloPreneurShipclassPage;
