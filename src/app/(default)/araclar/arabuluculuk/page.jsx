"use client"

import React, { useState } from "react";
import { TextField, FormControl, Button, InputLabel, MenuItem, Select, FormControlLabel, FormLabel, RadioGroup, Radio } from "@mui/material";

const Login = () => {

    const [uyusmazlikTuru, setUyusmazlikTuru] = useState();
    const [arabulucuSayisi, setArabulucuSayisi] = useState();
    const [tarafSayisi, setTarafSayisi] = useState();
    const [fiyat, setFiyat] = useState();
    const [total, setTotal] = useState();


    /* useEffect(() => {

    }, [uyusmazlikTuru, arabulucuSayisi, tarafSayisi, fiyat]);
 */
    function handleClick() {
        // var Fiyat = parseFloat(TlCevir($("#fiyat").val()));
        var Miktar = 0;

        if (arabulucuSayisi == 2) {
            switch (true) {
                case (fiyat <= 50000):
                    Miktar = fiyat * 0.09;
                    break;
                case (fiyat > 50000 && fiyat <= 130000):
                    Miktar = 4500 + ((fiyat - 50000) * 0.075);
                    break;
                case (fiyat > 130000 && fiyat <= 260000):
                    Miktar = 10500 + ((fiyat - 130000) * 0.06);
                    break;
                case (fiyat > 260000 && fiyat <= 520000):
                    Miktar = 18300 + ((fiyat - 260000) * 0.045);
                    break;
                case (fiyat > 520000 && fiyat <= 1300000):
                    Miktar = 30000 + ((fiyat - 520000) * 0.03);
                    break;
                case (fiyat > 1300000 && fiyat <= 2340000):
                    Miktar = 53400 + ((fiyat - 1300000) * 0.025);
                    break;
                case (fiyat > 2340000 && fiyat <= 4420000):
                    Miktar = 79400 + ((fiyat - 2340000) * 0.015);
                    break;
                case (fiyat > 4420000):
                    Miktar = 110600 + ((fiyat - 4420000) * 0.01);
                    break;
                default:
                    Miktar = 0;
                    break;
            }

        } else {
            switch (true) {
                case (fiyat <= 50000):
                    Miktar = fiyat * 0.06;
                    break;
                case (fiyat > 50000 && fiyat <= 130000):
                    Miktar = 3000 + ((fiyat - 50000) * 0.05);
                    break;
                case (fiyat > 130000 && fiyat <= 260000):
                    Miktar = 7000 + ((fiyat - 130000) * 0.04);
                    break;
                case (fiyat > 260000 && fiyat <= 520000):
                    Miktar = 12200 + ((fiyat - 260000) * 0.03);
                    break;
                case (fiyat > 520000 && fiyat <= 1300000):
                    Miktar = 20000 + ((fiyat - 520000) * 0.02);
                    break;
                case (fiyat > 1300000 && fiyat <= 2340000):
                    Miktar = 35600 + ((fiyat - 1300000) * 0.015);
                    break;
                case (fiyat > 2340000 && fiyat <= 4420000):
                    Miktar = 51200 + ((fiyat - 2340000) * 0.01);
                    break;
                case (fiyat > 4420000):
                    Miktar = 72000 + ((fiyat - 4420000) * 0.005);
                    break;
                default:
                    Miktar = 0;
                    break;
            }

        }
        console.log(Miktar);

        //var TarafSayisi = parseInt($("#tarafSayisi option:selected").val());
        if (tarafSayisi === 2) {
            if (Miktar < 1400 && uyusmazlikTuru == 1) {
                Miktar = 1400;
            }
            if (Miktar < 2000 && uyusmazlikTuru == 2) {
                Miktar = 2000;
            }
            if (Miktar < 1400 && uyusmazlikTuru == 3) {
                Miktar = 1400;
            }

        }
        if (tarafSayisi === 3) {
            if (Miktar < 1400 && uyusmazlikTuru === 1) {
                Miktar = 1400 + 40;
            }
            if (Miktar < 2000 && uyusmazlikTuru === 2) {
                Miktar = 2000 + 40;
            }
            if (Miktar < 1400 && uyusmazlikTuru === 3) {
                Miktar = 1400 + 40;
            }
        }
        if (tarafSayisi === 6) {
            if (Miktar < 1400 && uyusmazlikTuru === 1) {
                Miktar = 1400 + 100;
            }
            if (Miktar < 2000 && uyusmazlikTuru === 2) {
                Miktar = 2000 + 100;
            }
            if (Miktar < 1400 && uyusmazlikTuru === 3) {
                Miktar = 1400 + 100;
            }
        }
        if (tarafSayisi === 11) {
            if (Miktar < 1400 && uyusmazlikTuru == 1) {
                Miktar = 1400 + 160;
            }
            if (Miktar < 2000 && uyusmazlikTuru == 2) {
                Miktar = 2000 + 160;
            }
            if (Miktar < 1400 && uyusmazlikTuru == 3) {
                Miktar = 1400 + 160;
            }
        }

        setTotal(Miktar)

    }


    return (

        <div >
            <h2> Arabuluculuk Ücreti Hesaplama
            </h2>
            <TextField
                label="Uyuşmazlığa Konu Niktar"
                onChange={(e) => setFiyat(e.target.value)}
                required
                variant="outlined"
                color="secondary"

                sx={{ mb: 3 }}
                fullWidth


            />
            <FormControl>
                <FormLabel id="arabulucuSayisi">Arabulucu Sayısı</FormLabel>
                <RadioGroup
                    aria-labelledby="arabulucuSayisi"
                    name="controlled-radio-buttons-group"

                    onChange={e => setArabulucuSayisi(e.target.value)}
                >
                    <FormControlLabel value="1" control={<Radio />} label="Bir" />
                    <FormControlLabel value="2" control={<Radio />} label="Birden fazla" />
                </RadioGroup>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="uyusmazlikTuruLabel">Uyuşmazlık Türü</InputLabel>
                <Select
                    labelId="uyusmazlikTuruLabel"
                    id="uyusmazlikTuru"
                    label="Uyuşmazlık Türü"
                    onChange={e => setUyusmazlikTuru(e.target.value)}
                >

                    <MenuItem value="1">İş Hukuku Uyuşmazlıkları 2022</MenuItem>
                    <MenuItem value="2">Tüketici Uyuşmazlıkları 2022</MenuItem>
                    <MenuItem value="3">Ticari Uyuşmazlıklar 2022</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="tarafSayisiLabel">Taraf Sayısı</InputLabel>
                <Select
                    labelId="tarafSayisiLabel"
                    id="tarafSayisi"
                    label="Taraf Sayısı"
                    onChange={e => setTarafSayisi(e.target.value)}
                >

                    <MenuItem value={2}>2 taraflı</MenuItem>
                    <MenuItem value={3}>3-5 Taraflı</MenuItem>
                    <MenuItem value={6}>6-10 Taraflı</MenuItem>
                    <MenuItem value={11}>11 ve Üstü</MenuItem>
                </Select>
            </FormControl>


            <Button onClick={handleClick} variant="outlined" color="secondary" type="submit">Login</Button>
            {console.log(arabulucuSayisi, tarafSayisi, uyusmazlikTuru)}
            <h3>
                <b>Arabulucuya Ödenecek Miktar:</b>  <br />
                {total}
            </h3>
        </div>


    );
}

export default Login;