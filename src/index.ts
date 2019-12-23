import Chart from './core/Chart'
import Line from './geometry/Line'
import Axis from './core/Axis'
import Legend from './core/Legend'
import Tooltip from './core/Tooltip'
import Area from './geometry/Area'
import Interval from './geometry/Interval'
import Path from './geometry/Path'
import Point from './geometry/Point'
import Polygon from './geometry/Polygon'
import Schema from './geometry/Schema'
import GuideArc from './guide/Arc'
import GuideHtml from './guide/Html'
import GuideLine from './guide/Line'
import GuidePoint from './guide/Point'
import GuideRect from './guide/Rect'
import GuideRegionFilter from './guide/RegionFilter'
import GuideTag from './guide/Tag'
import GuideText from './guide/Text'

const version: String = process.env.VERSION

export {
    version,
    Line,
    Chart,
    Axis,
    Legend,
    Tooltip,
    Area,
    Interval,
    Path,
    Point,
    Polygon,
    Schema,
    GuideArc,
    GuideHtml,
    GuideLine,
    GuidePoint,
    GuideRect,
    GuideRegionFilter,
    GuideTag,
    GuideText
}
