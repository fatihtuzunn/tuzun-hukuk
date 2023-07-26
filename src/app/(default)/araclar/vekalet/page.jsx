"use client"

import { TextField, FormControl, Button, InputLabel, MenuItem, Select, FormControlLabel, FormLabel, RadioGroup, Radio } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
export default function VekaletUcreti() {
    const [konu, setKonu] = useState("");
    const [tutar, setTutar] = useState();
    const [sonuc, setSonuc] = useState("");
    const [mahkeme, setMahkeme] = useState("");


    function Calculate(value) {
        var res = 0.0;
        var oran1 = 0.16;
        var oran2 = 0.15;
        var oran3 = 0.14;
        var oran4 = 0.11;
        var oran5 = 0.08;
        var oran6 = 0.05;
        var oran7 = 0.03;
        var oran8 = 0.02;
        var oran9 = 0.01;
        var aralik1 = 100000;
        var aralik2 = 100000;
        var aralik3 = 300000;
        var aralik4 = 500000;
        var aralik5 = 700000;
        var aralik6 = 900000;
        var aralik7 = 1100000;
        var aralik8 = 1300000;
        var sinir1 = aralik1;
        var sinir2 = sinir1 + aralik2;
        var sinir3 = sinir2 + aralik3;
        var sinir4 = sinir3 + aralik4;
        var sinir5 = sinir4 + aralik5;
        var sinir6 = sinir5 + aralik6;
        var sinir7 = sinir6 + aralik7;
        var sinir8 = sinir7 + aralik8;
        if (value > 0 && value <= sinir1) {
            var val1 = value * oran1;
            res = val1;
        } else if (value > sinir1 && value <= sinir2) {
            var val1 = aralik1 * oran1;
            var val2 = (value - sinir1) * oran2;
            res = val1 + val2;
        } else if (value > sinir2 && value <= sinir3) {
            var val1 = aralik1 * oran1;
            var val2 = aralik2 * oran2;
            var val3 = (value - sinir2) * oran3;
            res = val1 + val2 + val3;
        } else if (value > sinir3 && value <= sinir4) {
            var val1 = aralik1 * oran1;
            var val2 = aralik2 * oran2;
            var val3 = aralik3 * oran3;
            var val4 = (value - sinir3) * oran4;
            res = val1 + val2 + val3 + val4;
        } else if (value > sinir4 && value <= sinir5) {
            var val1 = aralik1 * oran1;
            var val2 = aralik2 * oran2;
            var val3 = aralik3 * oran3;
            var val4 = aralik4 * oran4;
            var val5 = (value - sinir4) * oran5;
            res = val1 + val2 + val3 + val4 + val5;
        } else if (value > sinir5 && value <= sinir6) {
            var val1 = aralik1 * oran1;
            var val2 = aralik2 * oran2;
            var val3 = aralik3 * oran3;
            var val4 = aralik4 * oran4;
            var val5 = aralik5 * oran5;
            var val6 = (value - sinir5) * oran6;
            res = val1 + val2 + val3 + val4 + val5 + val6;
        } else if (value > sinir6 && value <= sinir7) {
            var val1 = aralik1 * oran1;
            var val2 = aralik2 * oran2;
            var val3 = aralik3 * oran3;
            var val4 = aralik4 * oran4;
            var val5 = aralik5 * oran5;
            var val6 = aralik6 * oran6;
            var val7 = (value - sinir6) * oran7;
            res = val1 + val2 + val3 + val4 + val5 + val6 + val7;
        } else if (value > sinir7 && value <= sinir8) {
            var val1 = aralik1 * oran1;
            var val2 = aralik2 * oran2;
            var val3 = aralik3 * oran3;
            var val4 = aralik4 * oran4;
            var val5 = aralik5 * oran5;
            var val6 = aralik6 * oran6;
            var val7 = aralik7 * oran7;
            var val8 = (value - sinir7) * oran8;
            res = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8;
        } else if (value > sinir8) {
            var val1 = aralik1 * oran1;
            var val2 = aralik2 * oran2;
            var val3 = aralik3 * oran3;
            var val4 = aralik4 * oran4;
            var val5 = aralik5 * oran5;
            var val6 = aralik6 * oran6;
            var val7 = aralik7 * oran7;
            var val8 = aralik8 * oran8;
            var val9 = (value - sinir8) * oran9;
            res = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 + val9;
        }
        return res;
    }

    function handleClick() {

        var res = 0.0;

        let value = parseFloat(tutar);
        if (konu == "para") {
            if (mahkeme == 0) {
                if (value < 3400) {
                    res = value;
                } else if (value >= 3400 && value < (3400 * 100) / 16) {
                    res = 3400;
                } else {
                    res = Calculate(value);
                }
            } else if (mahkeme == 1) {
                if (value < 5500) {
                    res = value;
                } else if (value >= 5500 && value < (5500 * 100) / 16) {
                    res = 5500;
                } else {
                    res = Calculate(value);
                }
            } else if (mahkeme == 2) {
                if (value < 4000) {
                    res = value;
                } else if (value >= 4000 && value < (4000 * 100) / 16) {
                    res = 4000;
                } else {
                    res = Calculate(value);
                }
            } else if (mahkeme == 3) {
                if (value < 9200) {
                    res = value;
                } else if (value >= 9200 && value < (9200 * 100) / 16) {
                    res = 9200;
                } else {
                    res = Calculate(value);
                }
            } else if (mahkeme == 4) {
                if (value < 4600) {
                    res = value;
                } else if (value >= 4600 && value < (4600 * 100) / 16) {
                    res = 4600;
                } else {
                    res = Calculate(value);
                }
            } else if (mahkeme == 5) {
                if (value < 15000) {
                    res = value;
                } else if (value >= 15000 && value < (15000 * 100) / 16) {
                    res = 15000;
                } else {
                    res = Calculate(value);
                }
            } else if (mahkeme == 6) {
                if (value < 11000) {
                    res = value;
                } else if (value >= 11000 && value < (11000 * 100) / 16) {
                    res = 11000;
                } else {
                    res = Calculate(value);
                }
            } else if (mahkeme == 7) {
                if (value < 5500) {
                    res = value;
                } else if (value >= 5500 && value < (5500 * 100) / 16) {
                    res = 5500;
                } else {
                    res = Calculate(value);
                }
            }
        } else if (konu == "icra") {
            if (value < 1800) {
                res = value;
            } else if (value >= 1800 && value < (1800 * 100) / 16) {
                res = 1800;
            } else {
                res = Calculate(value);
            }
        }
        let asr = res.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "TL";
        setSonuc(asr)

    }

    return (
        <div>
            <h2>
                Vekalet Ücreti Hesaplama
            </h2>
            <TextField
                label="Uyuşmazlığa Konu Niktar"
                onChange={(e) => setTutar(e.target.value)}
                required
                variant="outlined"
                color="secondary"

                sx={{ mb: 3 }}
                fullWidth


            />

            <FormControl>
                <FormLabel id="konu">Dava Konusu</FormLabel>
                <RadioGroup
                    aria-labelledby="konu"
                    name="controlled-radio-buttons-group"

                    onChange={e => setKonu(e.target.value)}
                >
                    <FormControlLabel value="para" control={<Radio />} label="Konusu para olan" />
                    <FormControlLabel value="icra" control={<Radio />} label="İcra Takibi" />
                </RadioGroup>
            </FormControl>

            {konu == "para" && <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="uyusmazlikTuruLabel">Uyuşmazlık Türü</InputLabel>
                <Select
                    labelId="uyusmazlikTuruLabel"
                    id="uyusmazlikTuru"
                    label="Uyuşmazlık Türü"
                    onChange={e => setMahkeme(e.target.value)}
                >
                    <MenuItem value="0">İcra Mahkemeleri</MenuItem>
                    <MenuItem value="1">Sulh Mahkemeleri</MenuItem>
                    <MenuItem value="2">Sulh Ceza/İnfaz Mahkemeleri</MenuItem>
                    <MenuItem value="3">Asliye Mahkemeleri</MenuItem>
                    <MenuItem value="4">Tüketici Mahkemeleri</MenuItem>
                    <MenuItem value="5">Fikri ve Sınai Mahkemeleri</MenuItem>
                    <MenuItem value="6">İdare ve Vergi Mah. -Duruşmalı</MenuItem>
                    <MenuItem value="7">İdare ve Vergi Mah. -Duruşmasız</MenuItem>

                </Select>
            </FormControl>}
            <Button onClick={handleClick} variant="outlined" color="secondary" type="submit">Login</Button>
            {console.log(mahkeme, tutar)}
            <h3>
                <b>Toplam tutar:</b> {sonuc} <br />
            </h3>

        </div>
    )
}