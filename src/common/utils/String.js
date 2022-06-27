const StringUtil = {
  reformatVicinity: vicinity => {
    return vicinity.replace(/<br\s*\/?>/gi, ' ');
  },
};
export default StringUtil;
