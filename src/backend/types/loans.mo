import Common "common";

module {
  public type LoanApplicationId = Text;
  public type MeetingRequestId = Text;
  public type CibilCheckId = Text;
  public type MonthlyReportId = Text;

  public type LoanType = {
    #personalLoan;
    #businessLoan;
    #odFacility;
    #homeLoan;
    #loanAgainstProperty;
    #educationLoan;
    #carLoan;
  };

  public type LoanApplicationInput = {
    name : Text;
    email : Text;
    phone : Text;
    loanType : Text;
    loanAmount : Nat;
    employmentType : Text;
    monthlyIncome : Nat;
    existingEMI : Nat;
    propertyValue : ?Nat;
    panNumber : Text;
    city : Text;
    message : Text;
  };

  public type LoanApplication = {
    id : LoanApplicationId;
    name : Text;
    email : Text;
    phone : Text;
    loanType : Text;
    loanAmount : Nat;
    employmentType : Text;
    monthlyIncome : Nat;
    existingEMI : Nat;
    propertyValue : ?Nat;
    panNumber : Text;
    city : Text;
    message : Text;
    submittedAt : Common.Timestamp;
  };

  public type MeetingRequestInput = {
    name : Text;
    email : Text;
    phone : Text;
    preferredDate : Text;
    preferredTime : Text;
    topic : Text;
    message : Text;
  };

  public type MeetingRequest = {
    id : MeetingRequestId;
    name : Text;
    email : Text;
    phone : Text;
    preferredDate : Text;
    preferredTime : Text;
    topic : Text;
    message : Text;
    submittedAt : Common.Timestamp;
  };

  public type CibilFactor = {
    key : Text;
    value : Text;
  };

  public type CibilCheckInput = {
    sessionId : Text;
    estimatedScore : Nat;
    scoreRange : Text;
    factors : [CibilFactor];
  };

  public type CibilCheck = {
    id : CibilCheckId;
    sessionId : Text;
    estimatedScore : Nat;
    scoreRange : Text;
    factors : [CibilFactor];
    completedAt : Common.Timestamp;
  };

  /// A monthly aggregated report of all submissions for a given month
  public type MonthlyReport = {
    id : MonthlyReportId;
    yearMonth : Text; // e.g. "2026-06"
    loanApplications : [LoanApplication];
    meetingRequests : [MeetingRequest];
    generatedAt : Common.Timestamp;
    excelLink : ?Text;
  };

  /// Input for generating a monthly report
  public type MonthlyReportInput = {
    yearMonth : Text;
  };
}
