const BaiTapXucSac = {
   mangDatCuon: [
      { ma: "keo", img: './img/keo.png', datCuoc: false },
      { ma: "bua", img: './img/bua.png', datCuoc: false },
      { ma: "bao", img: './img/bao.png', datCuoc: true }
   ],
   ketQua: "Im4219090suafhasu89fas0u",
   soThang: 0,
   TongSo: 0,
   computer: { ma: "keo", img: './img/keo.png', datCuoc: false },

}

const BaiTapoanTuTi = (state = BaiTapXucSac, action) => {
   switch (action.type) {

      case "Chon_Keo_Bua_bao": {

         console.log(BaiTapXucSac)
         let mangUpdate = [...state.mangDatCuon];
         mangUpdate = mangUpdate.map((item, index) => {
            return { ...item, datCuoc: false }
         })


         let index = mangUpdate.findIndex(qc => qc.ma === action.maChoi)

         if (index !== -1) {
            mangUpdate[index].datCuoc = true;
         }

         state.mangDatCuon = mangUpdate;
         return { ...state }

      }

      case "Bat_Dau": {
         let soNgauNhien = Math.floor(Math.random() * 3);
         let mangDatCuoc = state.mangDatCuon[soNgauNhien];
         state.computer = mangDatCuoc;

      console.log(state.computer)

         return { ...state }
      }

      case "Ket_Qua": {
         let player = state.mangDatCuon.find(item => item.datCuoc === true);
         let computer = state.computer;
      state.TongSo +=1;
         switch (player.ma) {
            
            case "keo":
               console.log("computer.ma",computer.ma)
               console.log("player.ma",player.ma)
               if (computer.ma === "keo") {
                  state.ketQua = "Hoa nhau !!!";
               }
               else if (computer.ma === "bua") {
                  state.ketQua = "Ban Thua !!!";
               }
               else if (computer.ma === "Bao") {
                  state.ketQua = "Ban Thang !!!";
                  state.soThang += 1;
               };
               break;
            case "bao":
               console.log("computer.ma",computer.ma)
               console.log("player.ma",player.ma)
               if (computer.ma === "bao") {
                  state.ketQua = "Hoa nhau !!!";
               }
               else if (computer.ma === "keo") {
                  state.ketQua = "Ban Thua !!!";
               }
               else if (computer.ma === "bua") {
                  state.ketQua = "Ban Thang !!!";
                  state.soThang += 1;
               };
               break;
            case "bua":

            console.log("computer.ma",computer.ma)
            console.log("player.ma",player.ma)
               if (computer.ma === "bua") {
                  state.ketQua = "Hoa nhau !!!";
               }
               else if (computer.ma === "bao") {
                  state.ketQua = "Ban Thua !!!";
               }
               else if (computer.ma === "keo") {
                  state.ketQua = "Ban Thang !!!";
                  state.soThang += 1;
               };
           
               break;


               
            default: return { ...state }; break;

            return { ...state };
         }
         return { ...state }
      }
      default: return { ...state }
   }
}

export default BaiTapoanTuTi