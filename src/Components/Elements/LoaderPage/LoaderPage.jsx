import { ConatinerLoading, SpinerText } from "./Style";
export default function LoaderPage() {
    return (
     <ConatinerLoading>
            <div className="spinner-border" style={{color:'#814EF3'}} role="status">
            </div>
            <SpinerText>Loading...</SpinerText>
      </ConatinerLoading>
    );
  }