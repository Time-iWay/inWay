import React from "react";

import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function ConsultForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="username">Produtos que trabalha</label>
        <FormControlLabel
          style={{ paddindTop: "10px", fontSize: "1.6rem" }}
          control={<Checkbox color="primary" id="Check" />}
          label="CDB"
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ paddindTop: "10px", fontSize: "1.6rem" }}
          control={<Checkbox color="primary" id="Check" />}
          label="LCI"
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ paddindTop: "10px", fontSize: "1.6rem" }}
          control={<Checkbox color="primary" id="Check" />}
          label="Tesouro direto"
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ paddindTop: "10px", fontSize: "1.6rem" }}
          control={<Checkbox color="primary" id="Check" />}
          label="Debentures"
          labelPlacement="start"
        />
      </div>

      <div className="input-block">
        <label htmlFor="quantidade em %"></label>
        <input id="email" name="email" required type="number" />
      </div>

      <button type="submit">Avançar</button>
    </form>
  );
}
