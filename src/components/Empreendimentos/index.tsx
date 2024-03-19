import { useEffect, useState } from "react";
import {
  Back,
  CardOption,
  Container,
  ContentOptions,
  ContentSelected,
} from "./styles";
import { empreendimentos } from "../../empreendimentos";
import { ArrowBigRight, MoveLeft } from "lucide-react";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ThemeProvider } from "../../ThemeContext";
import { DataSelected } from "../DataSelected";
export function Empreendimentos() {
  // const [selected, setSelected] = useState(false);
  const [empreendimento, setEmpreendimento] = useState<any>();

  return (
    <ThemeProvider page={empreendimento}>
      <Container>
        {empreendimento ? (
          <h1>Acompanhamento - {empreendimentos?.[empreendimento]?.name}</h1>
        ) : (
          <h1>Empreendimentos</h1>
        )}

        {empreendimento ? (
          <ContentSelected>
            <Back onClick={() => setEmpreendimento("")}>
              <MoveLeft strokeWidth={2.5} color="#FFF" /> <span>Voltar</span>
            </Back>
            <DataSelected empreendimento={empreendimento} />
          </ContentSelected>
        ) : (
          <ContentOptions>
            {Object.keys(empreendimentos).map((item: any) => {
              return (
                <CardOption
                  onClick={() => {
                    setEmpreendimento(item);
                  }}
                >
                  <img src={empreendimentos[item].imageName} alt="" />{" "}
                  <h2>Acompanhar obra</h2>
                  <ArrowBigRight />
                </CardOption>
              );
            })}
          </ContentOptions>
        )}
      </Container>
    </ThemeProvider>
  );
}
