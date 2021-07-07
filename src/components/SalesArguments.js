import { h } from "preact";
import { t } from "ttag";
import Gallery from "./Gallery/index";

import Linkifier from "./Linkifier";

const SalesArguments = ({salesArgument1,salesArgument2,salesArgument3})=>{
    const a = 0;
return <div className="static-gallery__main__sales-args">
<p>
  <Linkifier value={salesArgument1} />
</p>
<p>
  <Linkifier value={salesArgument2} />
</p>
<p>
  <Linkifier value={salesArgument3} />
</p>
</div>
}

export default SalesArguments;