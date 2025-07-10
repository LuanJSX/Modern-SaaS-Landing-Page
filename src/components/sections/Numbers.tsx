import { Container } from "../shared/Container"

export const Numbers = () => {
    return <section className="relative mt-12 md:mt-16">
        <Container className="flex justify-center align-center">
            <div className="mx-auto lg:mx-0 p-5 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
                <div className="text-center px-5">
                     <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">Integrações</h2>
                     <p className="mt-2 text-heading-3">WhatsApp, Notion, Bling, e mais</p>
                </div>
                <div className="text-center px-5">
                     <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">Automação</h2>
                     <p className="mt-2 text-heading-3">Automação 24/7 em Tempo Real</p>
                </div>
                <div className="text-center px-5">
                     <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1"> Decisões </h2>
                     <p className="mt-2 text-heading-3">Dashboards inteligentes para agir com confiança.</p>
                </div>
                <div className="text-center px-5">
                     <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1"> Clientes </h2>
                     <p className="mt-2 text-heading-3">E-commerce, saúde, educação...</p>
                </div>
            </div>

        </Container>
    </section>
}