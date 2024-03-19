import { ReactNode } from "react";

import {
  DataContainer,
  GraphicContainer,
  DataContent,
  ProgressContent,
} from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { empreendimentos } from "../../empreendimentos";
import { useTheme } from "../../ThemeContext";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-circular-progressbar/dist/styles.css";
interface DataSelectedProps {
  empreendimento: any;
}

export function DataSelected({ empreendimento }: DataSelectedProps) {
  const theme = useTheme();
  return (
    <DataContainer>
      <GraphicContainer>
        <CircularProgressbar
          value={empreendimentos?.[empreendimento]?.total}
          text={`${empreendimentos?.[empreendimento]?.total}%`}
          styles={buildStyles({
            pathColor: theme.primaryColor,
            trailColor: "#D9D9D9",
            textColor: "#282828",
            textSize: "20px",
          })}
        />
      </GraphicContainer>
      <DataContent>
        {empreendimentos?.[empreendimento]?.data.map((item: any, key: any) => (
          <ProgressContent key={key}>
            <span>
              {item.value}% {item.name}
            </span>
            <ProgressBar
              completed={item.value}
              bgColor={`linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`}
              labelSize="12px"
            />
          </ProgressContent>
        ))}
      </DataContent>
    </DataContainer>
  );
}
