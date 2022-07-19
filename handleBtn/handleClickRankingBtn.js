const handleClickRankingBtn = function (blockComment, blockRanking, makerActive) {
  blockComment.classList.remove("opacity-[1]")
  blockComment.classList.add("opacity-0")
  blockRanking.classList.add("opacity-[1]")
  blockRanking.classList.remove("opacity-0")
  makerActive.classList.add('translate-x-[100%]')
  makerActive.classList.remove('translate-x-0')

};

export default handleClickRankingBtn;
