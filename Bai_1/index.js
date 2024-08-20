let diemDoiTuongUuTien = 0;
let diemKhuVucUuTien = 0;

// Lay thong tin diem khu vuc uu tien
function selectRegion(region) {
  document.getElementById("khuVucMenuButton").textContent = region.textContent;
  switch (region.getAttribute("data-id")) {
    case "A":
      diemKhuVucUuTien = 2;
      break;
    case "B":
      diemKhuVucUuTien = 1;
      break;
    case "C":
      diemKhuVucUuTien = 0.5;
      break;
    default:
      diemKhuVucUuTien = 0;
  }
}

// Lay thong tin doi tuong uu tien
function selectObject(object) {
  document.getElementById("doiTuongMenuButton").textContent =
    object.textContent;
  switch (object.getAttribute("data-id")) {
    case "1":
      diemDoiTuongUuTien = 2.5;
      break;
    case "2":
      diemDoiTuongUuTien = 1.5;
      break;
    case "3":
      diemDoiTuongUuTien = 1;
      break;
    default:
      diemDoiTuongUuTien = 0;
  }
}

function hienThi(tongDiem, ketQua) {
  document.getElementById("hienThiKetQua").innerHTML = `
    <h2>Tong diem la: ${tongDiem}</h2>
    <h2>Ket qua: <span class=${
      ketQua == "FAILED" ? "bg-danger" : "bg-success"
    }>${ketQua}</span></h2>
    `;
}

// Tinh toan ket qua
function xetTuyen(diemChuan, diemMon1, diemMon2, diemMon3, diemCong) {
  let tongDiem = diemMon1 + diemMon2 + diemMon3 + diemCong;
  let ketQua = "FAILED";
  if (diemMon1 * diemMon2 * diemMon3 === 0 || tongDiem < diemChuan) {
    ketQua = "FAILED";
  } else if (tongDiem >= diemChuan) {
    ketQua = "PASSED";
  }
  hienThi(tongDiem, ketQua);
}

document.getElementById("tinhKetQua").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;
  let tongDiemCOng = diemDoiTuongUuTien + diemKhuVucUuTien;
  xetTuyen(diemChuan, diemMon1, diemMon2, diemMon3, tongDiemCOng);
};
