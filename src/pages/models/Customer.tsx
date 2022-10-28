//create customer model
export interface CustomerModel {
  id: string | null;
  name: string;
  image: string | null;
  phoneNumber: string;
  date: string;
  dateRegistered: string;
  voucherNumber: string;
  deposit: string;
  transStatus: Status;

  kycStatus: Status;
  price: string;
  colStatus: Status;
  personalDetails: CustomerPersonalDetails;
  fulfilMentDetail: FulfilMentDetail;
  transaction: Transaction[];
  loadDetails: LoadDetails;
}


export enum Status {
  Successfull = "Successfull",
  Failed = "Failed",
  Verified = "Verified",
  Active = "Active",
  Overdue = "Overdue",
  Pending = "Pending",
  Paid = "Paid",
}

export interface CustomerPersonalDetails {
  dateOfBirth: string;
  stateOfResidents: string;
  bankName: string;
  bankNumber: string;
  address: string;
  gender: string;
  bvn: string;
  locationOfPurchase: string;
  insuranceProvider: string;
  vehicleModel: string;
}
export interface LoadDetails {
  loanAmount: string;
  loadStatus: Status;
  dateRequested: string;
}

export interface FulfilMentDetail {
  repaymentAmount: string;
  valueOfcar: string;
  repaymentDuration: string;
  repaymentEnds: string;
  transactionDate: string;
  status: Status;
}

export interface Transaction {
  id: number;
  date: string;
  amount: string;
  status: Status;
  period: string;
}

export const customers: CustomerModel[] = [
  {
    id: "3065",
    name: "Olivia Rhye",
    image: "customer1.png",
    phoneNumber: "+234 803 0000",
    date: "Jan 6, 2022 • 09:21",
    deposit: "NGN 34,600",
    dateRegistered: "12/12/2020",
    voucherNumber: "00437E",
    transStatus: Status.Successfull,
    kycStatus: Status.Verified,
    price: "NGN 34,600",
    colStatus: Status.Active,
    personalDetails: {
      dateOfBirth: "02 Feb 1990",
      stateOfResidents: "Lagos",
      bankName: "Access Bank PLC",
      bankNumber: "102848393",
      address: "34 Sunville Estate, Macathony Street,  Ikeja",
      gender: "Male",
      bvn: "230459694042",
      locationOfPurchase: "Mega Autoshop, Lagos ",
      insuranceProvider: "Toyota - Model Z",
      vehicleModel: "Mazda - Model Q",
    },
    fulfilMentDetail: {
      repaymentAmount: "₦304,600",
      valueOfcar: "₦6,300,950",
      repaymentDuration: "6 months",
      repaymentEnds: "03 Dec 2022",
      transactionDate: "Jan 6, 2022 @ 08:45",
      status: Status.Active,
    },
    transaction: [
      {
        id: 1,
        date: "21 Jul, 2022",
        amount: "NGN 34,600",
        status: Status.Overdue,
        period: "2/6",
      },
      {
        id: 2,
        date: "14 Aug, 2022",
        amount: "NGN 34,600",
        status: Status.Pending,
        period: "4/6",
      },
      {
        id: 3,
        date: "21 Jul, 2022",
        amount: "NGN 34,700",
        status: Status.Paid,
        period: "1/6",
      },
      {
        id: 4,
        date: "21 Jul, 2022",
        amount: "NGN 34,800",
        status: Status.Paid,
        period: "2/6",
      },
    ],
    loadDetails: {
      loanAmount: "NGN 34,600",
      loadStatus: Status.Active,
      dateRequested: "Jan 6, 2022",
    },
  },
  {
    id: "3066",
    name: "Phoenix Baker",
    image: "customer2.png",
    phoneNumber: "+234 803 0000",
    date: "Jan 6, 2022 • 09:21",
    deposit: "NGN 27,800",
    dateRegistered: "06 Jan, 2022",
    voucherNumber: "60921V",
    transStatus: Status.Successfull,
    kycStatus: Status.Verified,
    price: "NGN 27,800",
    colStatus: Status.Active,
    personalDetails: {
      dateOfBirth: "21 Jul 1990",
      stateOfResidents: "Lagos",
      bankName: "GTB",
      bankNumber: "123456789",
      address: "Lagos",
      gender: "Male",
      bvn: "123456789",
      locationOfPurchase: "Lagos",
      insuranceProvider: "GTB",
      vehicleModel: "Toyota - Model Z",
    },
    fulfilMentDetail: {
      repaymentAmount: "₦304,600",
      valueOfcar: "₦6,300,950",
      repaymentDuration: "12 months",
      repaymentEnds: "03 Dec 2022",
      transactionDate: "Jan 6, 2022 @ 08:45",
      status: Status.Active,
    },
    transaction: [
      {
        id: 1,
        date: "21 Jul, 2022",
        amount: "NGN 34,600",
        status: Status.Overdue,
        period: "/6",
      },
      {
        id: 2,
        date: "14 Aug, 2022",
        amount: "NGN 34,600",
        status: Status.Pending,
        period: "4/6",
      },
      {
        id: 3,
        date: "21 Jul, 2022",
        amount: "NGN 34,700",
        status: Status.Paid,
        period: "1/6",
      },
      {
        id: 4,
        date: "21 Jul, 2022",
        amount: "NGN 34,800",
        status: Status.Paid,
        period: "2/6",
      },
    ],
    loadDetails: {
      loanAmount: "NGN 34,600",
      loadStatus: Status.Pending,
      dateRequested: "Jan 6, 2022",
    },
  },
  {
    id: "3067",
    name: "James Warri",
    image: null,
    phoneNumber: "+234 803 0000",
    date: "Jan 6, 2022 • 09:21",
    deposit: "NGN 19,580",
    dateRegistered: "12/12/2020",
    voucherNumber: "69942Z",
    transStatus: Status.Failed,
    kycStatus: Status.Verified,
    price: "NGN 19,580",
    colStatus: Status.Failed,
    personalDetails: {
      dateOfBirth: "21 Jul 1990",
      stateOfResidents: "Lagos",
      bankName: "GTB",
      bankNumber: "123456789",
      address: "Lagos",
      gender: "Male",
      bvn: "123456789",
      locationOfPurchase: "Lagos",
      insuranceProvider: "GTB",
      vehicleModel: "Lexus - Model R",
    },
    fulfilMentDetail: {
      repaymentAmount: "₦304,600",
      valueOfcar: "₦6,300,950",
      repaymentDuration: "12 months",
      repaymentEnds: "03 Dec 2022",
      transactionDate: "Jan 6, 2022 @ 08:45",
      status: Status.Active,
    },
    transaction: [
      {
        id: 1,
        date: "21 Jul, 2022",
        amount: "NGN 34,600",
        status: Status.Overdue,
        period: "3/6",
      },
      {
        id: 2,
        date: "14 Aug, 2022",
        amount: "NGN 34,600",
        status: Status.Pending,
        period: "4/6",
      },
      {
        id: 3,
        date: "21 Jul, 2022",
        amount: "NGN 34,700",
        status: Status.Paid,
        period: "1/6",
      },
      {
        id: 4,
        date: "21 Jul, 2022",
        amount: "NGN 34,800",
        status: Status.Paid,
        period: "2/6",
      },
    ],
    loadDetails: {
      loanAmount: "NGN 34,600",
      loadStatus: Status.Active,
      dateRequested: "Jan 6, 2022",
    },
  },
  {
    id: "3068",
    name: "Demi Wilkinson",
    image: null,
    phoneNumber: "+234 803 0000",
    date: "Jan 6, 2022 • 09:21",
    deposit: "NGN 46,700",
    dateRegistered: "12/12/2020",
    voucherNumber: "23821Q",
    transStatus: Status.Successfull,
    kycStatus: Status.Verified,
    price: "NGN 34,600",
    colStatus: Status.Active,
    personalDetails: {
      dateOfBirth: "21 Jul 1990",
      stateOfResidents: "Lagos",
      bankName: "GTB",
      bankNumber: "123456789",
      address: "Lagos",
      gender: "Male",
      bvn: "123456789",
      locationOfPurchase: "Lagos",
      insuranceProvider: "GTB",
      vehicleModel: "Toyota - Model Q",
    },
    fulfilMentDetail: {
      repaymentAmount: "₦304,600",
      valueOfcar: "₦6,300,950",
      repaymentDuration: "12 months",
      repaymentEnds: "03 Dec 2022",
      transactionDate: "Jan 6, 2022 @ 08:45",
      status: Status.Active,
    },
    transaction: [
      {
        id: 1,
        date: "21 Jul, 2022",
        amount: "NGN 34,600",
        status: Status.Overdue,
        period: "3/6",
      },
      {
        id: 2,
        date: "14 Aug, 2022",
        amount: "NGN 34,600",
        status: Status.Pending,
        period: "4/6",
      },
      {
        id: 3,
        date: "21 Jul, 2022",
        amount: "NGN 34,700",
        status: Status.Paid,
        period: "1/6",
      },
      {
        id: 4,
        date: "21 Jul, 2022",
        amount: "NGN 34,800",
        status: Status.Paid,
        period: "2/6",
      },
    ],
    loadDetails: {
      loanAmount: "NGN 34,600",
      loadStatus: Status.Active,
      dateRequested: "Jan 6, 2022",
    },
  },
  {
    id: "3069",
    name: "Candice Wu",
    image: "customer5",
    phoneNumber: "+234 803 0078",
    date: "Jan 6, 2022 • 09:21",
    deposit: "NGN 51,830",
    dateRegistered: "12/12/2020",
    voucherNumber: "80795W",
    transStatus: Status.Successfull,
    kycStatus: Status.Verified,
    price: "NGN 34,600",
    colStatus: Status.Active,
    personalDetails: {
      dateOfBirth: "21 Jul 1990",
      stateOfResidents: "Lagos",
      bankName: "GTB",
      bankNumber: "123456789",
      address: "Lagos",
      gender: "Male",
      bvn: "123456789",
      locationOfPurchase: "Lagos",
      insuranceProvider: "GTB",
      vehicleModel: "Toyota - Model A",
    },
    fulfilMentDetail: {
      repaymentAmount: "₦304,600",
      valueOfcar: "₦6,300,950",
      repaymentDuration: "12 months",
      repaymentEnds: "03 Dec 2022",
      transactionDate: "Jan 6, 2022 @ 08:45",
      status: Status.Active,
    },
    transaction: [
      {
        id: 1,
        date: "21 Jul, 2022",
        amount: "NGN 34,600",
        status: Status.Overdue,
        period: "3/6",
      },
      {
        id: 2,
        date: "14 Aug, 2022",
        amount: "NGN 34,600",
        status: Status.Pending,
        period: "4/6",
      },
      {
        id: 3,
        date: "21 Jul, 2022",
        amount: "NGN 34,700",
        status: Status.Paid,
        period: "1/6",
      },
      {
        id: 4,
        date: "21 Jul, 2022",
        amount: "NGN 34,800",
        status: Status.Paid,
        period: "2/6",
      },
    ],
    loadDetails: {
      loanAmount: "NGN 34,600",
      loadStatus: Status.Active,
      dateRequested: "Jan 6, 2022",
    },
  },
];
