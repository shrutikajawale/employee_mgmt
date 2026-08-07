export interface Iuser {
  employeeId: number
  employeeName: string
  contactNo: string
  emailId: string
  deptId: number
  password: string
  gender: string
  role: string
  createdDate: string
}

export interface IApiResponse{
  message: string,
  result: boolean,
  data: any

}

export interface IParentDept{
   departmentId: number,
    departmentName: string,
    departmentLogo: string
}

export interface IchildDept{
  childDeptId: number,
  parentDeptId: number,
  departmentName: string
}