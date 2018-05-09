


export class Helpers {

  static handleError(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }

  private static getListSpinners(): Array<any> {
    const files = [
      '../assets/img/spinners/spinner_01.gif',
      '../assets/img/spinners/spinner_02.gif',
      '../assets/img/spinners/spinner_03.gif',
      '../assets/img/spinners/spinner_04.gif',
      '../assets/img/spinners/spinner_05.gif',
      '../assets/img/spinners/spinner_06.gif',
      '../assets/img/spinners/spinner_07.gif',
      '../assets/img/spinners/spinner_08.gif',
      '../assets/img/spinners/spinner_09.gif',
      '../assets/img/spinners/spinner_010.gif',
      '../assets/img/spinners/spinner_011.gif',
      '../assets/img/spinners/spinner_012.gif',
      '../assets/img/spinners/spinner_013.gif',
      '../assets/img/spinners/spinner_014.gif',
      '../assets/img/spinners/spinner_015.gif',
      '../assets/img/spinners/spinner_016.gif',
      '../assets/img/spinners/spinner_017.gif',
      '../assets/img/spinners/spinner_018.gif',
      '../assets/img/spinners/spinner_019.gif',
      '../assets/img/spinners/spinner_020.gif',
      '../assets/img/spinners/spinner_021.gif',
      '../assets/img/spinners/spinner_022.gif',
      '../assets/img/spinners/spinner_023.gif',
      '../assets/img/spinners/spinner_024.gif',
      '../assets/img/spinners/spinner_025.gif',
      '../assets/img/spinners/spinner_026.gif',
      '../assets/img/spinners/spinner_027.gif',
      '../assets/img/spinners/spinner_028.gif',
      '../assets/img/spinners/spinner_029.gif',
      '../assets/img/spinners/spinner_030.gif',
      '../assets/img/spinners/spinner_031.gif',
      '../assets/img/spinners/spinner_032.gif',
      '../assets/img/spinners/spinner_033.gif',
      '../assets/img/spinners/spinner_034.gif',
      '../assets/img/spinners/spinner_035.gif',
      '../assets/img/spinners/spinner_036.gif',
      '../assets/img/spinners/spinner_037.gif',
      '../assets/img/spinners/spinner_038.gif',
      '../assets/img/spinners/spinner_039.gif',
      '../assets/img/spinners/spinner_040.gif',
      '../assets/img/spinners/spinner_041.gif',
      '../assets/img/spinners/spinner_042.gif',
      '../assets/img/spinners/spinner_043.gif',
      '../assets/img/spinners/spinner_044.gif',
      '../assets/img/spinners/spinner_045.gif',
      '../assets/img/spinners/spinner_046.gif',
      '../assets/img/spinners/spinner_047.gif',
      '../assets/img/spinners/spinner_048.gif',
      '../assets/img/spinners/spinner_049.gif',
      '../assets/img/spinners/spinner_050.gif',
      '../assets/img/spinners/spinner_051.gif',
      '../assets/img/spinners/spinner_052.gif',
      '../assets/img/spinners/spinner_053.gif',
      '../assets/img/spinners/spinner_054.gif'
    ];
    return files;
  }

  static getSpinner(): string {
    const spinners = this.getListSpinners();
    return spinners[Math.floor(Math.random() * spinners.length)];
  }
}
