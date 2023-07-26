"use client"

import { TextField, FormControl, Button, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useRef, useState } from "react";


export default function Icra() {

    const [dosyaTur, setDosyaTur] = useState("0");
    const [icraToplam, setIcraToplam] = useState("");
    const [borcluSayi, setBorcluSayi] = useState("");
    const [tebligatTur, setTebligatTur] = useState("");
    const [alacak, setAlacak] = useState("");


    function handleClick() {
        let tebligatBaz = (tebligatTur == 0) ? 42 : 84

        let tebligatGider = parseFloat(tebligatBaz * borcluSayi);

        if (dosyaTur == "1") {
            let alacakk = alacak.replace(/\./g, '').replace(/\,/g, '.');
            let pesinharc = parseFloat(alacakk * 0.005);

            setIcraToplam((80.70 + 11.50 + 18.15 + 2.00 + tebligatGider + pesinharc).toFixed(2) + ' TL');

        } else {
            setIcraToplam((80.70 + 11.50 + 18.15 + 2.00 + tebligatGider).toFixed(2) + ' TL');

        }

    }

    return (
        <div className="aracContainer">
            <h2 >İcra Masrafı Hesaplama</h2>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="dosyaTurLabel">Dosya Türü</InputLabel>
                <Select
                    labelId="dosyaTurLabel"
                    id="dosyaTur"
                    label="Dosya Türü"
                    onChange={e => setDosyaTur(e.target.value)}
                >

                    <MenuItem value="0">İlamlı</MenuItem>
                    <MenuItem value="1">İlamsız</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="tebligatTuruLabel">Tebligat türü nedir?</InputLabel>
                <Select
                    labelId="tebligatTuruLabel"
                    id="tebligatTuru"
                    label="Tebligat türü nedir?"
                    onChange={e => setTebligatTur(e.target.value)}
                >

                    <MenuItem value="0">Normal</MenuItem>
                    <MenuItem value="1">Hızlı</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="borcluSayisiLabel">Borçlu sayısı</InputLabel>
                <Select
                    labelId="borcluSayisiLabel"
                    id="borcluSayisi"
                    label="Borçlu sayısı"
                    onChange={e => setBorcluSayi(e.target.value)}
                >

                    <MenuItem value="1" >
                        1
                    </MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                    <MenuItem value="13">13</MenuItem>
                    <MenuItem value="14">14</MenuItem>
                    <MenuItem value="15">15</MenuItem>
                    <MenuItem value="16">16</MenuItem>
                    <MenuItem value="17">17</MenuItem>
                    <MenuItem value="18">18</MenuItem>
                    <MenuItem value="19">19</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                </Select>
            </FormControl>

            {dosyaTur == "1" &&
                <TextField
                    label="Alacak tutarı"
                    onChange={(e) => setAlacak(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"

                    sx={{ mb: 3 }}
                    fullWidth


                />}
            <Button onClick={handleClick} variant="outlined" color="secondary" type="submit">Login</Button>
            <h3 ><b>Toplam tutar:</b> <br /> {icraToplam}</h3>

        </div>
    )

}