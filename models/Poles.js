export class Poles {
  constructor(PoleId, Path, Description, ImageURL, Exp, TimeStamp, ArrUser) {
    this.PoleId = PoleId
    this.Path = Path
    this.Description = Description
    this.ImageURL = ImageURL
    this.Exp = Exp
    this.TimeStamp = TimeStamp
    this.ArrUser = ArrUser
  }
}

export class UserVoites {
  constructor(UserId, Username) {
    this.UserId = UserId
    this.Username = Username
  }
}
