import React, { Fragment , useMemo } from "react";
import { memo } from "react";
import loaderimg from '../../assets/img/8428-loader.gif'
function Spinner() {
  return (
    <Fragment>
      <div  className="is-ancestor has-text-centered">
          <img src={loaderimg} alt="cargar contenido" loading="lazy" />
      </div>
    </Fragment>
  );
}
// @@DiosTeAmoCoderZay@@
export default memo(Spinner);
